import React, { useState, useEffect } from "react";

function Log() {
  const [input, setInput] = useState("");
  const [nilai, setNilai] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNilai(input);
  };
  useEffect(() => {
    console.log("Nilai input berubah:", nilai);
  }, [nilai]);

  return (
    <div>
      <h1>Jan lupa Check Console</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Input yang dimasukkan: <strong>{nilai}</strong>
      </p>
    </div>
  );
}

export default Log;
