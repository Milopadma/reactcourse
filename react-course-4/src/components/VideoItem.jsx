import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
        <div className="header">{video.snippet.title}</div>
        <span>{video.snippet.description}</span>
      </div>
    </div>
  );
};

export default VideoItem;
