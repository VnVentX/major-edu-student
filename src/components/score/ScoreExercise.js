import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import bg from "../../resources/img/score/score-bg.png";

const mockData = [
  {
    id: 1,
    unitName: "Unit 1",
    exercise: [
      {
        id: 1,
        exerciseName: "Exercise 1",
        score: "10/10",
      },
      {
        id: 2,
        exerciseName: "Exercise 2",
        score: "10/10",
      },
      {
        id: 3,
        exerciseName: "Exercise 3",
        score: "10/10",
      },
      {
        id: 4,
        exerciseName: "Exercise 4",
        score: "8/10",
      },
    ],
  },
  {
    id: 2,
    unitName: "Unit 2",
    exercise: [
      {
        id: 1,
        exerciseName: "Exercise 1",
        score: "10/10",
      },
      {
        id: 2,
        exerciseName: "Exercise 2",
        score: "10/10",
      },
      {
        id: 3,
        exerciseName: "Exercise 3",
        score: "10/10",
      },
      {
        id: 4,
        exerciseName: "Exercise 4",
        score: "8/10",
      },
    ],
  },
  {
    id: 3,
    unitName: "Unit 3",
    exercise: [
      {
        id: 1,
        exerciseName: "Exercise 1",
        score: "10/10",
      },
      {
        id: 2,
        exerciseName: "Exercise 2",
        score: "10/10",
      },
      {
        id: 3,
        exerciseName: "Exercise 3",
        score: "10/10",
      },
      {
        id: 4,
        exerciseName: "Exercise 4",
        score: "8/10",
      },
    ],
  },
  {
    id: 4,
    unitName: "Unit 4",
    exercise: [
      {
        id: 1,
        exerciseName: "Exercise 1",
        score: "10/10",
      },
      {
        id: 2,
        exerciseName: "Exercise 2",
        score: "10/10",
      },
      {
        id: 3,
        exerciseName: "Exercise 3",
        score: "10/10",
      },
      {
        id: 4,
        exerciseName: "Exercise 4",
        score: "8/10",
      },
    ],
  },
  {
    id: 5,
    unitName: "Unit 5",
    exercise: [
      {
        id: 1,
        exerciseName: "Exercise 1",
        score: "10/10",
      },
      {
        id: 2,
        exerciseName: "Exercise 2",
        score: "10/10",
      },
      {
        id: 3,
        exerciseName: "Exercise 3",
        score: "10/10",
      },
      {
        id: 4,
        exerciseName: "Exercise 4",
        score: "8/10",
      },
    ],
  },
];

const ScoreExercise = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    setData(mockData);
  }, []);

  const showMore = (item) => {
    let tempArr = Array.from(data);
    console.log(tempArr[item].isShown);
    if (
      tempArr[item].isShown === undefined ||
      tempArr[item].isShown === false
    ) {
      tempArr[item].isShown = true;
    } else {
      tempArr[item].isShown = false;
    }
    setData(tempArr);
  };

  return (
    <div className="score-container">
      <div className="score-detail-wrap">
        <div className="general-title ">
          <h1>Score</h1>
        </div>
        <div className="record-wrap">
          {data?.map((i, idx) => (
            <React.Fragment key={idx}>
              <div className="unit-record">
                {i.isShown === true ? (
                  <div
                    className="unit-arrow arrow-up"
                    onClick={() => {
                      showMore(idx);
                    }}
                  />
                ) : (
                  <div
                    className="unit-arrow arrow-down"
                    onClick={() => {
                      showMore(idx);
                    }}
                  />
                )}

                <div
                  className="unit-name"
                  onClick={() => {
                    showMore(idx);
                  }}
                >
                  <h1>{i.unitName}</h1>
                </div>
                <div className="unit-status" />
              </div>
              {i.isShown === true && (
                <div className="unit-exercise">
                  <div style={{ marginBottom: 20 }} />
                  {i.exercise?.map((exercise) => (
                    <React.Fragment key={exercise.id}>
                      <div className="unit-exercise-item">
                        <Link
                          to={`${window.location.pathname}/exercise/${exercise.id}`}
                        >
                          <h1>{exercise.exerciseName}</h1>
                        </Link>
                        <h1>{exercise.score}</h1>
                      </div>
                      <div className="item-spacer" />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreExercise;
