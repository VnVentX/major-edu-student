import React, { useState, useEffect } from "react";
import UIfx from "uifx";
import correct_sfx from "../../../../resources/sound/correct-sound.mp3";
import img from "../../../../resources/img/game/game-btn1.png";

const correctSound = new UIfx(correct_sfx, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const ChoosingGame = (props) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(props.info.answers.sort(() => Math.random() - 0.5));
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
    <div className="game-choosing-wrap">
      <div className="game-choosing-title">
        <div>
          <h1>{props.info.questionText}</h1>
        </div>
      </div>
      <div className="game-choosing-option">
        {options?.map((i, idx) => (
          <div
            key={idx}
            className={
              i.isWrong === true
                ? "game-choosing-option-item game-choosing-option-hidden"
                : "game-choosing-option-item"
            }
            onClick={() => {
              handleSelectedOption(i, idx);
            }}
          >
            {/* {i.optionImg} */}
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosingGame;
