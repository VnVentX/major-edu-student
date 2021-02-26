import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ChoosingGame from "./choosing/ChoosingGame";
import FillingGame from "./fill-blank/FillingGame";
import MatchingMathGame from "./matching-math/MatchingMathGame";
import MatchingGame from "./matching/MatchingGame";
import SwapGame from "./swap/SwapGame";

const data = [
  {
    id: 1,
    type: "SWAP",
    game: [
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
    type: "MATCH",
    game: [
      { id: 1, question: "Hand", answer: "Hand", falseAnswer: "Leg" },
      { id: 2, question: "Leg", answer: "Leg", falseAnswer: "Hand" },
      { id: 3, question: "Shoulder", answer: "Shoulder", falseAnswer: "Nose" },
      { id: 4, question: "Ear", answer: "Ear", falseAnswer: "Eye" },
      { id: 5, question: "Nose", answer: "Nose", falseAnswer: "Ear" },
      { id: 6, question: "Eye", answer: "Eye", falseAnswer: "Shoulder" },
    ],
  },
  {
    id: 3,
    type: "SWAP",
    game: [
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
    id: 4,
    type: "MATCH",
    game: [
      { id: 1, question: "Hand", answer: "Hand", falseAnswer: "Leg" },
      { id: 2, question: "Leg", answer: "Leg", falseAnswer: "Hand" },
      { id: 3, question: "Shoulder", answer: "Shoulder", falseAnswer: "Nose" },
      { id: 4, question: "Ear", answer: "Ear", falseAnswer: "Eye" },
      { id: 5, question: "Nose", answer: "Nose", falseAnswer: "Ear" },
      { id: 6, question: "Eye", answer: "Eye", falseAnswer: "Shoulder" },
    ],
  },
  {
    id: 5,
    type: "CHOOSE",
    game: {
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
        {
          questionID: 9,
          optionImg: "Shoulder",
        },
        {
          questionID: 10,
          optionImg: "Knee",
        },
      ],
    },
  },
];

const pageSize = 1;

const PlayGame = () => {
  const [isStart, setIsStart] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    setGameData(data);
  }, []);

  useEffect(() => {
    setTotalPage(gameData.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [gameData.length]);

  const handelStartGame = () => {
    setTimeout(() => {
      setIsStart(!isStart);
    }, 500);
  };

  //! Move to next game
  const handleChangeGame = (page) => {
    if (page <= totalPage) {
      setCurrent(page);
      setMinIndex((page - 1) * pageSize);
      setMaxIndex(page * pageSize);
    } else {
      console.log("Game Cleared");
      history.push({
        pathname: `${location.pathname}/result`,
        state: { result: 100 },
      });
    }
  };

  const nextGame = () => {
    handleChangeGame(current + 1);
  };

  return (
    <div className="page">
      <div className="page-contain">
        <div className="play-game-container">
          <div className="game-wrap">
            {/* <div className="exercise-title">
              <h1>Play Game</h1>
            </div> */}
            {!isStart && (
              <div className="play-btn" onClick={handelStartGame}>
                <h2>Start</h2>
              </div>
            )}
            {isStart && (
              <>
                {gameData?.map(
                  (i, idx) =>
                    idx >= minIndex &&
                    idx < maxIndex && (
                      <div className="game-inner" key={idx}>
                        <h1>Game {idx + 1}</h1>
                        {i.type === "SWAP" ? (
                          <SwapGame info={i.game} nextGame={nextGame} />
                        ) : i.type === "MATCH" ? (
                          <MatchingGame info={i.game} nextGame={nextGame} />
                        ) : i.type === "MATCH_MATH" ? (
                          <MatchingMathGame info={i.game} nextGame={nextGame} />
                        ) : i.type === "FILL" ? (
                          <FillingGame info={i.game} nextGame={nextGame} />
                        ) : i.type === "CHOOSE" ? (
                          <ChoosingGame info={i.game} nextGame={nextGame} />
                        ) : null}
                      </div>
                    )
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
