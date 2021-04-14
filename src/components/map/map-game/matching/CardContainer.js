import React from "react";
import Card from "./Card";
import img from "../../../../resources/img/game/game-btn1.png";

const CardContainer = (props) => {
  return (
    <div className="wrapper" onDragOver={props.drag}>
      {props.info.map((blurb, index) => {
        return (
          <div key={blurb.question} className="matching-pair">
            <div
              className={
                blurb.answer === blurb.falseAnswer
                  ? "matching-question-img matching-true"
                  : "matching-question-img matching-false"
              }
            >
              {/* <h3>{blurb.question}</h3> */}
              <img src={img} />
            </div>
            <div
              className={
                blurb.answer === blurb.falseAnswer
                  ? "true-bubble"
                  : "false-bubble"
              }
            ></div>
            <Card
              question={blurb.question}
              swap={props.swap}
              index={index + 1}
              options={blurb.falseAnswer}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
