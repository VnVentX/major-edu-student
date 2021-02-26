import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import correct_sfx from "../../../../resources/sound/correct-sound.mp3";

const correctSound = new UIfx(correct_sfx, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const ChoosingGame = (props) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(props.info.answers);
  }, [props.info.answers]);

  const handleSelectedOption = (option, optionIndex) => {
    var result = options;
    if (props.info.questionID === option.questionID) {
      result[optionIndex].isWrong = false;
      correctSound.play();
      setTimeout(() => {
        props.nextGame();
      }, 1000);
    } else {
      result[optionIndex].isWrong = true;
    }
    setOptions([...result]);
  };

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
        <div className="game-choosing-title">
          <h1>{props.info.questionText}</h1>
        </div>
        <div className="game-choosing-option">
          {options?.map((i, idx) => (
            <div
              key={idx}
              className={
                i.isWrong === true ? "option-item option-hidden" : "option-item"
              }
              onClick={() => {
                handleSelectedOption(i, idx);
              }}
            >
              {i.optionImg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoosingGame;
