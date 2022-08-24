import { ImageItem } from "./ImageItem";
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map((image) => { //map through the images array and return an image component for each image, image refers to argument passed in 
    return <ImageItem key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;