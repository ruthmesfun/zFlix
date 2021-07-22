import React from "react";
import "./Result.css";

export const NO_IMG_AVAILABLE =
  "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";

const Result = ({ thumbnail, title, year }) => (
  <div className="Result">
    <h3 className="Result__title">{title}</h3>
    <p className="Result__year">{year}</p>
    <img
      src={thumbnail ? thumbnail : NO_IMG_AVAILABLE}
      alt={title}
      className="Result__thumbnail"
    />
  </div>
);

export default Result;
