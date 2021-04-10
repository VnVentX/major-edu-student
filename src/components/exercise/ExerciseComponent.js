import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import bg from "../../resources/img/unit/unit-bg.png";

const color = [
  "#D41FF1",
  "#881FF1",
  "#F1441F",
  "#8EBA13",
  "#059BA5",
  "#4C49F3",
  "#059BA5",
  "#F19D1F",
];

let itemColor = "";

const ExerciseComponent = () => {
  const [data, setData] = useState([]);
  const lessonID = window.location.pathname.split("/")[6];

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    let header = document.getElementById("header");
    header.style.visibility = "visible  ";
    randomColor(color);
    async function getAllExercise() {
      await axios
        .get(
          `https://mathscienceeducation.herokuapp.com/lesson/${lessonID}/exercises`
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
    <div className="page">
      <div className="back-btn" onClick={() => history.push(lessonPath[5])} />
      <div className="page-contain">
        <div className="exercise-container">
          <div className="exercise-wrap">
            {data?.map((i) => (
              <div
                key={i.id}
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Link to={`${location.pathname}/${i.id}`}>
                  <div
                    className="exercise-btn"
                    style={{ backgroundColor: itemColor }}
                  >
                    <div className="check-area" />
                    <div className="check-mark" />
                    <h1>{i.exerciseName}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
