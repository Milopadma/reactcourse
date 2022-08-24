import React from "react";

export class ImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef(); //create a ref to the image element
  }

  componentDidMount() {
    //add event listener to the image element to call the handleImageLoad function when the image is loaded
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    //set the spans for the image item to the width and height of the image
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { image } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
    );
  }
}
