import React from "react";

class SearchBar extends React.Component {
  state = { term: "" }; //hold the value term of the input field as a state so that it doesnt need to be fetched from DOM everytime
  
  handleInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault(); //prevent the default behaviour of the form submit event
    this.props.onSubmit(this.state.term); //pass the term to the parent component
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleInputChange} //"inform" the state what the current input value is
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
