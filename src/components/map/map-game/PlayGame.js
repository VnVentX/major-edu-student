import React, { useState, useEffect } from "react";
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
  //   {
  //     id: 2,
  //     type: "MATCH",
  //     game: [
  //       { id: 1, question: "Hand", answer: "Hand", falseAnswer: "Leg" },
  //       { id: 2, question: "Leg", answer: "Leg", falseAnswer: "Hand" },
  //       { id: 3, question: "Shoulder", answer: "Shoulder", falseAnswer: "Nose" },
  //       { id: 4, question: "Ear", answer: "Ear", falseAnswer: "Eye" },
  //       { id: 5, question: "Nose", answer: "Nose", falseAnswer: "Ear" },
  //       { id: 6, question: "Eye", answer: "Eye", falseAnswer: "Shoulder" },
  //     ],
  //   },
];

const PlayGame = () => {
  const [isStart, setIsStart] = useState(false);

  const handelStartGame = () => {
    setIsStart(!isStart);
  };

  return (
    <div className="page">
      <div className="page-contain">
        <div className="game-container">
          {/* <div className="exercise-title">
            <h1>Play Game</h1>
          </div> */}
          <div className="game-wrap">
            {!isStart && (
              <div className="play-btn" onClick={handelStartGame}>
                <h2>Start</h2>
              </div>
            )}
            {isStart && (
              <div>
                {data.map((i, idx) => {
                  return (
                    <div key={idx}>
                      {i.type === "SWAP" ? (
                        <SwapGame info={i.game} />
                      ) : i.type === "MATCH" ? (
                        <MatchingGame info={i.game} />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}
            {/* {isStart && <SwapGame />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
