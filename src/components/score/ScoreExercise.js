import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import bg from "../../resources/img/score/score-bg.png";

const ScoreExercise = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getStunderScore() {
      setLoading(true);
      let subjectID = window.location.pathname.split("/")[2];
      let accountID = 1;
      let formData = new FormData();
      formData.append("subjectId", subjectID);
      formData.append("accountId", accountID);
      await axios
        .post(
          `https://mathscienceeducation.herokuapp.com/subject/${subjectID}/score`,
          formData
        )
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getStunderScore();
  }, []);

  const showMore = (item) => {
    let tempArr = Array.from(data);
    if (
      tempArr[item].isShown === undefined ||
      tempArr[item].isShown === false
    ) {
      tempArr[item].isShown = true;
    } else {
      tempArr[item].isShown = false;
    }
    setData(tempArr);
  };

  const showMoreLesson = (unitIdx, lessonIdx) => {
    let tempArr = Array.from(data);
    if (
      tempArr[unitIdx].lessonScoreViewDTOList[lessonIdx].isShown ===
        undefined ||
      tempArr[unitIdx].lessonScoreViewDTOList[lessonIdx].isShown === false
    ) {
      tempArr[unitIdx].lessonScoreViewDTOList[lessonIdx].isShown = true;
    } else {
      tempArr[unitIdx].lessonScoreViewDTOList[lessonIdx].isShown = false;
    }
    setData(tempArr);
  };

  return (
    <div className="page">
      <div className="back-btn" onClick={() => history.push("/score")} />
      <div className="page-contain">
        <div className="score-container">
          <div className="score-detail-wrap">
            <div className="general-title ">
              <h1>Score</h1>
            </div>
            <div className="record-wrap">
              {loading ? (
                <Spin size="large" />
              ) : (
                data?.map((i, idx) => (
                  <React.Fragment key={idx}>
                    <div className="unit-record">
                      {i.isShown === true ? (
                        <div
                          className="unit-arrow arrow-up"
                          onClick={() => {
                            showMore(idx);
                          }}
                        />
                      ) : (
                        <div
                          className="unit-arrow arrow-down"
                          onClick={() => {
                            showMore(idx);
                          }}
                        />
                      )}

                      <div
                        className="unit-name"
                        onClick={() => {
                          showMore(idx);
                        }}
                      >
                        <h1>{i.unitName}</h1>
                      </div>
                      {i.process !== "100%" ? (
                        <div className="status-btn">
                          <div className="status-btn-oval" />
                          <h1>{i.process === "N/A" ? "0%" : i.process}</h1>
                        </div>
                      ) : (
                        <div className="status-btn-done">
                          <div className="status-btn-done-oval" />
                          <h1>{i.process}</h1>
                        </div>
                      )}
                    </div>
                    {i.isShown === true && (
                      <div className="unit-exercise">
                        <div style={{ marginBottom: 20 }} />
                        {i.lessonScoreViewDTOList?.map((lesson, index) => (
                          <React.Fragment key={index}>
                            <div className="lesson-exercise-item">
                              {lesson.isShown === true ? (
                                <div
                                  className="unit-arrow arrow-up-bl"
                                  style={{ marginRight: 10 }}
                                  onClick={() => {
                                    showMoreLesson(idx, index);
                                  }}
                                />
                              ) : (
                                <div
                                  className="unit-arrow arrow-down-bl"
                                  style={{ marginRight: 10 }}
                                  onClick={() => {
                                    showMoreLesson(idx, index);
                                  }}
                                />
                              )}
                              <h1
                                onClick={() => {
                                  showMoreLesson(idx, index);
                                }}
                              >
                                {lesson.lessonName}
                              </h1>
                            </div>
                            <div className="item-spacer" />
                            {lesson.isShown === true && (
                              <div className="lesson-exercise">
                                <div style={{ marginBottom: 20 }} />
                                {lesson.exerciseResponseDTOList?.map(
                                  (exercise, index) => (
                                    <React.Fragment key={index}>
                                      <div className="unit-exercise-item">
                                        <Link
                                          to={`${window.location.pathname}/exercise/${exercise.id}`}
                                        >
                                          <h1>{exercise.exerciseName}</h1>
                                        </Link>
                                        <h1>
                                          {exercise.done === true
                                            ? "DONE"
                                            : "NOT DONE"}
                                        </h1>
                                      </div>
                                      <div className="item-spacer" />
                                    </React.Fragment>
                                  )
                                )}
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreExercise;
