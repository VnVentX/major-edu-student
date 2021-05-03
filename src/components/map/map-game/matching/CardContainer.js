import React from "react";
import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="wrapper" onDragOver={props.drag}>
      {props.info.map((blurb, index) => {
        return (
          <div key={blurb.optionImageUrl} className="matching-pair">
            <div
              className={
                blurb.optionText === blurb.wrongOptionText
                  ? "matching-question-img matching-true"
                  : "matching-question-img matching-false"
              }
            >
              <img src={blurb.optionImageUrl} alt={blurb.optionImageUrl} />
            </div>
            <div
              className={
                blurb.optionText === blurb.wrongOptionText
                  ? "true-bubble"
                  : "false-bubble"
              }
            ></div>
            <Card
              optionImageUrl={blurb.optionImageUrl}
              swap={props.swap}
              index={index + 1}
              options={blurb.wrongOptionText}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
