import React from "react";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h1>YouTube Clone</h1>
        <SearchBar />
      </div>
    );
  }
}