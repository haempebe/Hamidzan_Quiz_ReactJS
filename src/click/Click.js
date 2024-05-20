import React from "react";
import { useState } from "react";

const Click = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>How much ur Click?</p>
      <button onClick={handleClick}>Click here!</button>
      <p>Ur Click = {count}</p>
    </div>
  );
};

export default Click;
