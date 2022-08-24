import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos
    .map((video) => {
      return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
    })
    .slice(0, 10);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
