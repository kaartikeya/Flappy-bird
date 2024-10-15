import React from "react";
import pipeImage from "./pipe.png";

const Pipes = ({ pipePosition }) => {
  return (
    <img
      src={pipeImage}
      alt="pipe"
      className="pipe"
      style={{
        left: pipePosition.x,
        top: pipePosition.y,
      }}
      draggable={true}
    />
  );
};

export default Pipes;
