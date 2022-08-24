const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{video.snippet.title}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoDetail;
