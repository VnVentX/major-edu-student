import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import bg from "../../resources/img/score/score-bg.png";

const gradeID = 1;

const ScoreComponent = () => {
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getAllSubject() {
      setLoading(true);
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/grade/${gradeID}/subjects`)
        .then((res) => {
          setLoading(false);
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
            {loading ? (
              <Spin size="large" />
            ) : (
              lesson?.map((i) => (
                <Link key={i.id} to={`${window.location.pathname}/${i.id}`}>
                  <div className="general-btn">
                    <div className="general-oval" />
                    <h1>{i.subjectName}</h1>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreComponent;
