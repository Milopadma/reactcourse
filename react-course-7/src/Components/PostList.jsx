import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  state = {};
  render() {
    return (
      <div>
        <h1>Post List</h1>
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostList);
