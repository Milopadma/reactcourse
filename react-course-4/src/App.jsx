import React from "react";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onTermSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <h1>YouTube Clone</h1>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}
