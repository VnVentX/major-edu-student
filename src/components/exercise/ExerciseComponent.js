import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import "antd/dist/antd.css";

const color = ["blue", "green", "orange", "pink"];
let itemColor = "";

const ExerciseComponent = () => {
  const [data, setData] = useState([]);
  const lessonID = window.location.pathname.split("/")[6];
  useEffect(() => {
    async function getAllExercise() {
      await axios
        .get(
          `https://mathscience.azurewebsites.net/lesson/${lessonID}/exercise`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllExercise();
  }, []);

  const history = useHistory();
  const location = useLocation();

  //! Get Lesson path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const lessonPath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

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
            <div className="exercise-title">
              <h1>Exercise</h1>
            </div>
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
                      <h1>Exercise {i.exerciseName}</h1>
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
