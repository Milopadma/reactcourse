import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "178462243558-kbojcldfut1esdf34l6so4a25nv57cvp.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "sstreamy",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); //gets the auth instance of google api
          this.onAuthChange(this.auth.isSignedIn.get()); //gets the status of the user
          this.auth.isSignedIn.listen(this.onAuthChange); // listens for changes in the status of the user
        });
    });
  }

  // when signed in the user id is passed to the action creator
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  // sign in and sign out functions
  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  // renders the button based on the status of the user
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }; // gets the status of the user from the auth reducer
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
