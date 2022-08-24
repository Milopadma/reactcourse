import React from "react";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos
    .map((video) => {
      return (
        <div
          className="item"
          key={video.etag}
          onClick={() => onVideoSelect(video)}
        >
          <img
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <div className="content">
            <div className="header">{video.snippet.title}</div>
          </div>
        </div>
      );
    })
    .slice(0, 10);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};


export default VideoList;