import React, { useState, useEffect } from "react";
import axios from "axios";
import ChoosingGame from "./choosing/ChoosingGame";
import FillingGame from "./fill-blank/FillingGame";
import MatchingMathGame from "./matching-math/MatchingMathGame";
import MatchingGame from "./matching/MatchingGame";
import SwapGame from "./swap/SwapGame";
import bg from "../../../resources/img/game/game-bg.png";
import GameResult from "./GameResult";

const pageSize = 1;

const PlayGame = () => {
  const [isSubmitResult, setIsSubmitResult] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    let header = document.getElementById("header");
    header.style.visibility = "hidden";
    getAllGame();
  }, []);

  const getAllGame = async () => {
    let gameID = window.location.pathname.split("/")[8];
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/game/${gameID}/questions`
      )
      .then((res) => {
        setGameData(res.data);
        setTotalPage(res.data.length / pageSize);
        setMinIndex(0);
        setMaxIndex(pageSize);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //! Move to next game
  const handleChangeGame = (page) => {
    if (page <= totalPage) {
      setCurrent(page);
      setMinIndex((page - 1) * pageSize);
      setMaxIndex(page * pageSize);
    } else {
      handelChangeIsSubmitResult();
    }
  };

  const nextGame = () => {
    handleChangeGame(current + 1);
  };

  //! Đi mến màn hình submit result ()
  const handelChangeIsSubmitResult = () => {
    setIsSubmitResult(!isSubmitResult);
    handleChangeGame(1);
  };

  return (
    <div className="page">
      <div className="play-game-container">
        {isSubmitResult ? (
          <GameResult />
        ) : (
          gameData?.map(
            (i, idx) =>
              idx >= minIndex &&
              idx < maxIndex && (
                <React.Fragment key={idx}>
                  <div className="game-inner">
                    <div className="question-text">
                      <h2>{i.questionTitle}</h2>
                    </div>
                    {i.questionType === "SWAP" ? (
                      <SwapGame info={i.optionQuestion} nextGame={nextGame} />
                    ) : i.questionType === "MATCH" ? (
                      <MatchingGame
                        info={i.optionQuestion}
                        nextGame={nextGame}
                      />
                    ) : i.questionType === "MATCH_MATH" ? (
                      <MatchingMathGame
                        info={i.optionQuestion}
                        nextGame={nextGame}
                      />
                    ) : i.questionType === "FILL" ? (
                      <FillingGame
                        questionImg={i.questionImageUrl}
                        info={i.optionQuestion}
                        nextGame={nextGame}
                      />
                    ) : i.questionType === "CHOOSE" ? (
                      <ChoosingGame
                        info={i.optionQuestion}
                        correct={i.optionQuestion[0].optionText}
                        nextGame={nextGame}
                      />
                    ) : null}
                  </div>
                </React.Fragment>
              )
          )
        )}
      </div>
    </div>
  );
};

export default PlayGame;
