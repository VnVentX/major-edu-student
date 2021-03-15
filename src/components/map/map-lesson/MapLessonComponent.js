import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Lecture from "./Lecture";

const MapLessonComponent = () => {
  const history = useHistory();
  const location = useLocation();

  //! Get Unit path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const unitPath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  return (
    <div className="quiz-bg">
      <div className="page">
        <div
          className="arrow-btn left-arrow"
          onClick={() => history.push(unitPath[3])}
        >
          <h1>Unit 1</h1>
        </div>
        <div className="page-contain">
          <div className="lesson-container">
            <div className="lesson-title">
              <h1>Lesson 1</h1>
            </div>
            <Lecture />
            <div className="side-btn">
              <Link to={location.pathname + "/exercise"}>
                <div className="lesson-exercise-btn" />
              </Link>
              <Link to={location.pathname + "/game"}>
                <div className="game-btn" />
              </Link>
            </div>
            <div className="bottom-btn">
              <Link to={location.pathname + "/exercise"}>
                <div className="lesson-exercise-btn" />
              </Link>
              <Link to={location.pathname + "/game"}>
                <div className="game-btn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLessonComponent;
