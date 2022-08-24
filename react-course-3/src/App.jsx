import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import React from "react";
import unsplash from "./api/unsplash";

import Users from "./components/Users";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Fetched: {this.state.images.length} images
        <ImageList images={this.state.images} />
        <Users/>
      </div>
    );
  }
}

export default App;
