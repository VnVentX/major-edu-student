import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ChoosingGame from "./choosing/ChoosingGame";
import FillingGame from "./fill-blank/FillingGame";
import MatchingMathGame from "./matching-math/MatchingMathGame";
import MatchingGame from "./matching/MatchingGame";
import SwapGame from "./swap/SwapGame";
import bg from "../../../resources/img/game/game-bg.png";
import GameResult from "./GameResult";

const data = [
  {
    id: 1,
    type: "SWAP",
    questionTitle: "Swap the word to the right picture",
    options: [
      {
        id: 1,
        question: "Question 1",
        answer: "Answer 1",
        falseAnswer: "Answer 2",
      },
      {
        id: 2,
        question: "Question 2",
        answer: "Answer 2",
        falseAnswer: "Answer 3",
      },
      {
        id: 3,
        question: "Question 3",
        answer: "Answer 3",
        falseAnswer: "Answer 4",
      },
      {
        id: 4,
        question: "Question 4",
        answer: "Answer 4",
        falseAnswer: "Answer 1",
      },
    ],
  },
  {
    id: 2,
    type: "MATCH_MATH",
    questionTitle: "Swap the word to the right picture",
    options: [
      { id: 1, question: "Hand", answer: "Hand", falseAnswer: "Leg" },
      { id: 2, question: "Leg", answer: "Leg", falseAnswer: "Shoulder" },
      { id: 3, question: "Shoulder", answer: "Shoulder", falseAnswer: "Ear" },
      { id: 4, question: "Ear", answer: "Ear", falseAnswer: "Hand" },
    ],
  },
  {
    id: 3,
    type: "MATCH",
    questionTitle: "Swap the word to the right picture",
    options: [
      { id: 1, question: "Hand", answer: "Hand", falseAnswer: "Leg" },
      { id: 2, question: "Leg", answer: "Leg", falseAnswer: "Hand" },
      { id: 3, question: "Shoulder", answer: "Shoulder", falseAnswer: "Nose" },
      { id: 4, question: "Ear", answer: "Ear", falseAnswer: "Eye" },
      { id: 5, question: "Nose", answer: "Nose", falseAnswer: "Ear" },
      { id: 6, question: "Eye", answer: "Eye", falseAnswer: "Shoulder" },
    ],
  },
  {
    id: 4,
    type: "CHOOSE",
    questionTitle: "Choose the right picture",
    options: {
      questionID: 1,
      questionText: "Hand",
      answers: [
        {
          questionID: 1,
          optionImg: "Hand",
        },
        {
          questionID: 2,
          optionImg: "Eye",
        },
        {
          questionID: 3,
          optionImg: "Ear",
        },
        {
          questionID: 4,
          optionImg: "Nose",
        },
        {
          questionID: 5,
          optionImg: "Finger",
        },
        {
          questionID: 6,
          optionImg: "Toe",
        },
        {
          questionID: 7,
          optionImg: "Mouth",
        },
        {
          questionID: 8,
          optionImg: "Head",
        },
      ],
    },
  },
  {
    id: 5,
    type: "FILL",
    questionTitle: "Fill in the blank with the correct answer",
    questionImg: "1 + 1 = 2",
    options: [
      { inputType: "text", text: "one" },
      { inputType: "operator", text: "+" },
      { inputType: "text", text: "one" },
      { inputType: "operator", text: "=" },
      { inputType: "text", text: "two" },
    ],
  },
];

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
    setGameData(data);
  }, []);

  useEffect(() => {
    setTotalPage(gameData.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [gameData.length]);

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
                  <div className="question-text">
                    <h2>{i.questionTitle}</h2>
                  </div>
                  <div className="game-inner">
                    {i.type === "SWAP" ? (
                      <SwapGame info={i.options} nextGame={nextGame} />
                    ) : i.type === "MATCH" ? (
                      <MatchingGame info={i.options} nextGame={nextGame} />
                    ) : i.type === "MATCH_MATH" ? (
                      <MatchingMathGame info={i.options} nextGame={nextGame} />
                    ) : i.type === "FILL" ? (
                      <FillingGame
                        questionImg={i.questionImg}
                        info={i.options}
                        nextGame={nextGame}
                      />
                    ) : i.type === "CHOOSE" ? (
                      <ChoosingGame info={i.options} nextGame={nextGame} />
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
