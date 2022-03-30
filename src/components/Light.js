import React from "react";

function Light(props) {
  return (
    <div
      className={`led ${props.className} ${
        props.on ? "light-on" : "light-off"
      }`}
    ></div>
  );
}

export default Light;
