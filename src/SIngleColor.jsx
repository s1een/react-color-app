import React, { useState, useEffect } from "react";
import rgbToHex from "../src/utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  function handleClick() {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  }
  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(time);
  }, [alert]);
  return (
    <article
      onClick={handleClick}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex.toUpperCase()}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
