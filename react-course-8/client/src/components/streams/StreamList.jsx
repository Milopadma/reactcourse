import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  // lifecycle method to fetch the list of streams
  componentDidMount() {
    this.props.fetchStreams();
  }

  // helper method to check if the user is the owner of the stream
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  // helper method to render the list of streams taken from the redux store
  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
          {this.renderAdmin(stream)}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>{this.renderList()}</h2>
      </div>
    );
  }
}

// mapStateToProps is a function that is called by redux to get the state from the redux store
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  }; //converts object to array
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
