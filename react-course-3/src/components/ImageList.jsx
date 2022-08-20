const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageItem key={image.id} image={image} />;
  });
  return <div>{images}</div>;
};

export default ImageList;