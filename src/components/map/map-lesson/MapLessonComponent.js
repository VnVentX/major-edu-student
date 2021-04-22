import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import Lecture from "./Lecture";

const MapLessonComponent = () => {
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState({});

  //! Get Unit path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const pathStack = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  const lessonPath = pathStack[3];

  useEffect(() => {
    async function getLessonByID() {
      let lessonID = window.location.pathname.split("/")[2];
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/lesson/${lessonID}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getLessonByID();
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
        <Lecture url={data?.lessonUrl} />
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
