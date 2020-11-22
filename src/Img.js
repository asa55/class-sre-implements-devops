import React from "react";

export default function Img(props) {
  return (
    <>
      <a href={props.href}>
        <img
          className="responsive-css"
          src={props.src}
          alt={props.alt}
          style={{
            width: props.width,
            maxWidth: "50vw"
          }}
        ></img>
      </a>
      <p>
        [<strong>Image {props.imageNumber}:</strong>
        <em> {props.alt}</em>]
      </p>
    </>
  );
}
