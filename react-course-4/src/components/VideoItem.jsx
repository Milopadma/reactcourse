import React from "react";
import './videoitem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    //onVideoSelect function is a prop passed in from App.jsx
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <span>{video.snippet.description}</span>
      </div>
    </div>
  );
};

export default VideoItem;
