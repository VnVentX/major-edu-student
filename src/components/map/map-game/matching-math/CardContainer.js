import React from "react";
import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="game-match-math-wrap" onDragOver={props.drag}>
      {props.info.map((i, index) => {
        return (
          <div key={i.question} className="game-match-math-item">
            <div className="question-border">
              <img src="https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/images%2F19e7ec31-799b-45b1-ad05-4c9d6a8f86b9.jpg?alt=media&token=732a331f-33a4-4530-953c-62f3b6fa543e" />
              {/* <h3>{i.question}</h3> */}
            </div>
            <Card
              question={i.question}
              swap={props.swap}
              index={index + 1}
              options={i.falseAnswer}
              correct={i.answer}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
