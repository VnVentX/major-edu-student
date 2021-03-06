import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { getID } from "../../helper/jwt";
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

const ProgressTestComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    let header = document.getElementById("header");
    header.style.visibility = "visible  ";
    getProgressTestBySubjectID();
  }, []);

  const getProgressTestBySubjectID = async () => {
    let progressTestID = window.location.pathname.split("/")[4];
    let accountID = getID();
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/progressTest/${progressTestID}/exercises/student?accountId=${accountID}`
      )
      .then((res) => {
        setData(res.data.length === 0 ? [] : res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const history = useHistory();
  const location = useLocation();

  //! Get Lesson path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const subjectPath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  function randomColor(array) {
    itemColor = array[Math.floor(Math.random() * array.length)];
    return itemColor;
  }

  return (
    <div className="page">
      <div className="back-btn" onClick={() => history.push(subjectPath[1])} />
      <div className="page-contain">
        <div className="exercise-container">
          <div className="exercise-wrap">
            {loading ? (
              <Spin size="large" />
            ) : (
              data?.map((i) => (
                <div
                  key={i.id}
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                  onLoad={randomColor(color)}
                >
                  <Link to={`${location.pathname}/test/${i.id}`}>
                    <div
                      className="exercise-btn"
                      style={{ backgroundColor: itemColor }}
                    >
                      <div className="check-area" />
                      {i.done ? <div className="check-mark" /> : null}
                      <h1>Exercise {i.exerciseName}</h1>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTestComponent;
