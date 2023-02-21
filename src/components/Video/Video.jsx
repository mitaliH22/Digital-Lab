import React from 'react'
import "./Video.scss";
import video from "./video.mp4";

function Video() {
  return (
    <div className="video-container container">
      <h1>Brand New Samsung</h1>
      <video
        src={video}
        width="100%"
        height="600"
        autoPlay={true}
        loop={true}
        controls
      />
    </div>
  );
}

export default Video