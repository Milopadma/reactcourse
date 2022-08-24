import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

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
    let randomNumber = Math.floor(Math.random() * response.data.items.length);
    this.setState({ videos: response.data.items , selectedVideo: response.data.items[randomNumber]});
  };

  onVideoSelect = (video) => {
    //when the user selects a video, set the state to the selected video
    //a callback function passed in to child component VideoList and then down to VideoItem
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("reactjs");
  }

  render() {
    return (
      <div className="ui container">
        <h1>YouTube API</h1>
        <p>Get videos from the YouTube API from your queries below.</p>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <span> Fetched: {this.state.videos.length} videos! </span>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.selectedVideo && (
                <VideoDetail video={this.state.selectedVideo} /> //pass in the selected video to VideoDetail
              )}
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} //pass in the videos array from state
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
