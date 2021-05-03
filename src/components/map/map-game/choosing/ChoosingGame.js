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
    setOptions(props.info.sort(() => Math.random() - 0.5));
  }, [props.info]);

  const handleSelectedOption = (option, optionIndex) => {
    var result = options;
    if (props.correct === option.optionText) {
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
          <h1>{props.correct}</h1>
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
            <img src={i.optionImageUrl} alt={i.optionImageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoosingGame;
