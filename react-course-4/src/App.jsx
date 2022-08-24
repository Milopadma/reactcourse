import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    //when the user selects a video, set the state to the selected video
    this.setState({ selectedVideo: video });
    console.log(video);
  };

  render() {
    return (
      <div className="ui container">
        <h1>YouTube Clone</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <span> Fetched: {this.state.videos.length} videos! </span>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
