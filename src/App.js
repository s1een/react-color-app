import React, { useState } from "react";
import SingleColor from "../src/SIngleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [count, setCount] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#774d96").all(10));

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors;
      if (+count > 0 && count <= 100) {
        colors = new Values(color).all(+count);
      } else {
        colors = new Values(color).all(10);
      }
      setList(colors);
      setCount(0);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#774d96"
            className={`${error ? "error" : ""}`}
          />
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className={`${error ? "error" : ""}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((singleColor, index) => (
          <SingleColor key={index} {...singleColor} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
