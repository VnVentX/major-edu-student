import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Space } from "antd";

const MapLessonComponent = (props) => {
  const [link, setLink] = useState("");

  const history = useHistory();
  const location = useLocation();

  return (
    <div className="page">
      <div className="arrow-btn left-arrow" onClick={() => history.goBack()}>
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
              <Link to="/">
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
