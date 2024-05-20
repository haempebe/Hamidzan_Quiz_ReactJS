import React from "react";

function Paragraph(props) {
  return (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nobis
      quaerat aut voluptates ipsum tempora laboriosam quod eius, nesciunt <strong>{props.kata} </strong>
      perspiciatis saepe optio quibusdam asperiores esse repellat, reprehenderit
      tenetur, aspernatur suscipit.
    </p>
  );
}

export default Paragraph;
