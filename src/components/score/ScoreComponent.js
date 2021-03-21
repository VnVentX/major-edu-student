import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import bg from "../../resources/img/score/score-bg.png";

const gradeID = 1;

const data = [
  {
    id: 1,
    subjectName: "Math",
  },  {
    id: 2,
    subjectName: "Science",
  },
];

const ScoreComponent = () => {
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getAllSubject() {
      await axios
        .get(
          `https://mathscienceeducation.herokuapp.com/grade/${gradeID}/subjects`
        )
        .then((res) => {
          setLesson(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllSubject();
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="score-container">
          <div className="score-wrap">
            <div className="general-title ">
              <h1>Score</h1>
            </div>
            {data?.map((i) => (
              <Link key={i.id} to={`${window.location.pathname}/${i.id}`}>
                <div className="general-btn">
                  <div className="general-oval" />
                  <h1>{i.subjectName}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreComponent;
