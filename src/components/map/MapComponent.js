import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Space } from "antd";

const MapComponent = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="map-page">
      <div className="map">
        <div className="map-container">
          <div className="map-item lesson" onClick={handleClick}>
            <h1>Lesson</h1>
          </div>
          {isShowing && (
            <div className="lesson-items">
              <Space direction="vertical" size={100}>
                <div className="item lesson-1">
                  <Link to="/math/unit/1/map/lesson/1">
                    <h1>Lesson 1</h1>
                  </Link>
                </div>
                <div className="item lesson-2">
                  <Link to="/math/unit/1/map/lesson/2">
                    <h1>Lesson 2</h1>
                  </Link>
                </div>
              </Space>
            </div>
          )}
          <div className="map-item exercise">
            <Link to="/math/unit/1/map/exercise">
              <h1>Excercise</h1>
            </Link>
          </div>
          <div className="map-item progress">
            <Link to="/math/unit/1/map/progress">
              <h1>Progress</h1>
            </Link>
          </div>
          <div className="map-item game">
            <h1>Game</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
