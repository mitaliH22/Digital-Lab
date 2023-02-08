import React from 'react'
import "./ImageWithText.scss";

function ImageWithText(props) {
    const { announcement, title, description, image } = props.data;
  return (
      <div className="img-with-text container">
        <div className="text-container">
          <button>{announcement}</button>
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>
        <div className="img-container">
          <img src={image} alt="banner-img" />
        </div>
      </div>
  );
}

export default ImageWithText