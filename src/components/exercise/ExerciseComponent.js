import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "antd/dist/antd.css";

const color = ["blue", "green", "orange", "pink"];
let itemColor = "";

const ExerciseComponent = () => {
  const history = useHistory();
  const location = useLocation();

  //! Get Lesson path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const lessonPath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  const data = [
    {
      id: 0,
      exerciseName: "Exercise 1",
    },
    {
      id: 1,
      exerciseName: "Exercise 2",
    },
    {
      id: 2,
      exerciseName: "Exercise 3",
    },
    {
      id: 3,
      exerciseName: "Exercise 4",
    },
    {
      id: 4,
      exerciseName: "Exercise 5",
    },
    {
      id: 5,
      exerciseName: "Exercise 6",
    },
    {
      id: 6,
      exerciseName: "Exercise 7",
    },
    {
      id: 7,
      exerciseName: "Exercise 8",
    },
  ];

  function randomColor(array) {
    itemColor = array[Math.floor(Math.random() * array.length)];
    return itemColor;
  }

  return (
    <div className="exercise-bg">
      <div className="page">
        <div
          className="arrow-btn left-arrow"
          onClick={() => history.push(lessonPath[5])}
        >
          <h1>Lesson 1</h1>
        </div>
        <div className="page-contain">
          <div className="exercise-container">
            <div className="exercise-wrap">
              {data?.map((i, idx) => (
                <div
                  key={i.id}
                  style={{
                    display: "grid",
                    placeItems: "center",
                    margin: "20px 0 0 0",
                  }}
                  onLoad={randomColor(color)}
                >
                  <Link to={`${location.pathname}/${i.id}`}>
                    <div className={`exercise-btn ${itemColor}`}>
                      <h1>{i.exerciseName}</h1>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
