import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create A Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

//"connect" a component to the redux store
export default connect(null, { createStream })(StreamCreate);
