import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Space } from "antd";

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
    <div className="page">
      <div
        className="arrow-btn left-arrow"
        onClick={() => history.push(unitPath[2])}
      >
        <h1>Unit 1</h1>
      </div>
      <div className="page-contain">
        <div className="lecture-container">
          <div className="lecture-title">
            <h1>Lesson 1</h1>
          </div>
          <div className="lecture-wrap">
            <Space direction="vertical" size={50}>
              <Link to={location.pathname + "/lecture"}>
                <div className="unit-detai-btn">
                  <h1>Lecture</h1>
                </div>
              </Link>
              <Link to={location.pathname + "/exercise"}>
                <div className="unit-detai-btn">
                  <h1>Exercise</h1>
                </div>
              </Link>
              <Link to={location.pathname + "/game"}>
                <div className="unit-detai-btn">
                  <h1>Game</h1>
                </div>
              </Link>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLessonComponent;
