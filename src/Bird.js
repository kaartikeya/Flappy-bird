import React from "react";
import birdImage from "./bird.gif";

const Bird = ({ birdPosition }) => {
  return (
    <img
      src={birdImage}
      alt="bird"
      className="bird"
      style={{
        left: birdPosition.x,
        top: birdPosition.y,
      }}
      draggable={true}
    />
  );
};
export default Bird;
