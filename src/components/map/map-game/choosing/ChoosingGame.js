import React, { useState, useEffect } from "react";

var template = [];

const ChoosingGame = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    template = props.info;
    template.answers?.map((i) => {
      i.isWrong = undefined;
    });
    setData(template);
  }, [props.info]);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "60vh",
        height: "60vh",
      }}
    >
      <div className="game-choosing-wrap">
        <div classNam="game-choosing-title">
          <h1>{data.questionText}</h1>
        </div>
        <div className="game-choosing-option">
          {data.answers?.map((i, idx) => (
            <div key={idx} className="option-item">
              {i.optionImg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoosingGame;
