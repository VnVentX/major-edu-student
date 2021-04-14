import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "../../../resources/img/unit/unit-detail-bg.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import Lecture from "./Lecture";

const MapLessonComponent = () => {
  const history = useHistory();
  const location = useLocation();

  //! Get Unit path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const pathStack = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  const lessonPath = pathStack[3];

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
  }, []);

  return (
    <div className="page">
      <div className="back-btn" onClick={() => history.push(lessonPath)} />
      <div className="lesson-container">
        <Link
          className="side-btn"
          to={location.pathname + "/exercise"}
          style={{ marginRight: 50 }}
        >
          <div className="lesson-exercise-btn" />
        </Link>
        <Lecture />
        <Link
          className="side-btn"
          to={location.pathname + "/game"}
          style={{ marginLeft: 50 }}
        >
          <div className="game-btn" />
        </Link>

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
  );
};

export default MapLessonComponent;
