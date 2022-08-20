import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import React from "react";

class App extends React.Component {

  onSearchSubmit = (term) => { //receive term from child component
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
