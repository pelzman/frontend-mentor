import React from "react";
import "./Summary.scss";

// import Memory from "../../assets/images/icon-memory.svg";
const Summary = ({ result, backgroundColor, textColor }) => {
  const { category, score, icon } = result;
  return (
    <div className="summary">
      <div
        className="card"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        <span className="summary--cart">
          <span className=" summary-cart-content">
            <image src={icon}></image>
            <h2>{category}</h2>
          </span>
        </span>
        <div className="summary-rating">
          <h3 className="rating">{score}/100</h3>
        </div>
      </div>
    </div>
  );
};

export default Summary;
