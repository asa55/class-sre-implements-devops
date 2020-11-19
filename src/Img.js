import React from "react";

export default function Img(props) {
  return (
    <>
      <a href={props.href}>
        <img src={props.src} width={props.width} alt={props.alt}></img>
      </a>
      <p>
        [<strong>Image {props.imageNumber}:</strong>
        <em> {props.alt}</em>]
      </p>
    </>
  );
}
