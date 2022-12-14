import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  state = {};

  render() {
    const { user } = this.props;
    // const user = this.props.users.find((user) => user.id === this.props.userId); //find the user with the same id as the userId prop
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
