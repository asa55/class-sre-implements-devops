import React from "react";
import AlertDialog from "./Dialog";

export default function Img(props) {
  return (
    <>
      <AlertDialog
        href={props.href}
        content={
          <>
            <img
              className="responsive-css"
              src={props.src}
              alt={props.alt}
              style={{
                width: props.width,
                maxWidth: "50vw"
              }}
            ></img>{" "}
          </>
        }
      />
      <p>
        [<strong>Image {props.imageNumber}:</strong>
        <em> {props.alt}</em>]
      </p>
    </>
  );
}
