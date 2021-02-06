import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Space } from "antd";

const MapComponent = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    setIsHovering(!isHovering);
  };

  return (
    <div className="map-page">
      <div className="map">
        <div className="map-container">
          <div className="map-item lesson" onClick={handleClick}>
            <h1>Lesson</h1>
          </div>
          {isHovering && (
            <div className="lesson-items">
              <Space direction="vertical" size={100}>
                <div className="item lesson-1">
                  <Link to="/grade/1/math/unit/1/lesson/1">
                    <h1>Lesson 1</h1>
                  </Link>
                </div>
                <div className="item lesson-2">
                  <Link to="/grade/1/math/unit/1/lesson/2">
                    <h1>Lesson 2</h1>
                  </Link>
                </div>
              </Space>
            </div>
          )}
          <div className="map-item excercise">
            <h1>Excercise</h1>
          </div>
          <div className="map-item progress">
            <h1>Progress</h1>
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
