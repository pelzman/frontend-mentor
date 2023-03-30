import React, { useState } from "react";
import Summary from "../Summary/Summary";
import "./SummaryList.scss";
import { Data } from "../Data";

const SummaryList = () => {
  const [results] = useState(Data);
  const colors = [
    "hsla(0, 100%, 67%, 0.062)",
    "hsla(39, 100%, 56%, 0.116)",
    "hsla(166, 100%, 37%, 0.192)",
    "hsla(234, 85%, 45%, 0.137)",
  ];
  const textColors = [
    "hsl(0, 100%, 67%)",
    "hsl(39, 100%, 56%)",
    "hsl(166, 100%, 37%)",
    "hsl(234, 85%, 45%)",
  ];
  const resultData = results.map((result, index) => (
    <div key={index}>
      <Summary
        result={result}
        backgroundColor={colors[index % colors.length]}
        textColor={textColors[index % colors.length]}
      />
    </div>
  ));
  return (
    <div className="summaryList">
      <h2 className="heading">Summary</h2>
      {resultData}
    </div>
  );
};

export default SummaryList;
