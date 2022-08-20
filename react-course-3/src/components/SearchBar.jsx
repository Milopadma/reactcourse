import React from "react";

class SearchBar extends React.Component {
    state = { term: '' }; //hold the value term of the input field as a state so that it doesnt need to be fetched from DOM everytime

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} //"inform" the state what the current input value is
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
