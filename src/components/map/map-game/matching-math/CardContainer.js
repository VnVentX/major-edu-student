import React from "react";
import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="game-match-math-wrap" onDragOver={props.drag}>
      {props.info.map((i, index) => {
        return (
          <div key={i.question} className="game-match-math-item">
            <div className="question-border">
              <h3>{i.question}</h3>
            </div>
            <Card
              question={i.question}
              swap={props.swap}
              index={index + 1}
              options={i.falseAnswer}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
