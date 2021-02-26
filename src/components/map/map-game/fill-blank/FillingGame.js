import React, { useState } from "react";
import UIfx from "uifx";
import correct_sfx from "../../../../resources/sound/correct-sound.mp3";

const correctSound = new UIfx(correct_sfx, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

const FillingGame = (props) => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [thirdValue, setThirdValue] = useState("");

  const checkCorrect = (e) => {
    if (
      firstValue === props.info.answers[0] &&
      secondValue === props.info.answers[2] &&
      thirdValue === props.info.answers[3]
    ) {
      correctSound.play();
      setTimeout(() => {
        props.nextGame();
      }, 1000);
    }
    e.preventDefault();
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
          <h1>{props.info.questionImage}</h1>
        </div>
        <div className="game-choosing-option">
          <input
            type="text"
            name="firstValue"
            className="game-fill-input"
            onChange={(e) => {
              setFirstValue(e.target.value);
            }}
          />
          <h1>{props.info.answers[1]}</h1>
          <input
            type="text"
            name="secondValue"
            className="game-fill-input"
            onChange={(e) => {
              setSecondValue(e.target.value);
            }}
          />
          <h1>=</h1>
          <input
            type="text"
            name="thirdValue"
            className="game-fill-input"
            onChange={(e) => {
              setThirdValue(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: 20,
          }}
          onClick={checkCorrect}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FillingGame;
