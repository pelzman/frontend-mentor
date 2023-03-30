import React from "react";
import "./Result.scss";
const Result = () => {
  return (
    <div className="result">
      <h4>Your Result</h4>
      <div className="result--circle">
        <div className="result--circle---content">
          <h1>76</h1>
          <p>of 100</p>
        </div>
      </div>
      <div className="result--footer">
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these test.
        </p>
      </div>
    </div>
  );
};

export default Result;
