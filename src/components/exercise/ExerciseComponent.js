import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "antd/dist/antd.css";

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
  ];
  return (
    <div className="page">
      <div
        className="arrow-btn left-arrow"
        onClick={() => history.push(lessonPath[4])}
      >
        <h1>Lesson 1</h1>
      </div>
      <div className="page-contain">
        <div className="exercise-container">
          <div className="exercise-title">
            <h1>Exercises</h1>
          </div>
          <div className="exercise-wrap">
            {data?.map((i) => (
              <Link key={i.id} to={`${location.pathname}/${i.id}`}>
                <div className="exercise-btn">
                  <h1>{i.exerciseName}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
