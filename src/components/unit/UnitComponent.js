import React from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";
import "../../resources/css/unit.css";

const UnitComponent = () => {
  return (
    <div className="page">
      <div className="page-contain">
        <div className="unit-container">
          <div className="unit-title">
            <h1>Unit</h1>
          </div>
          <div className="unit-wrap">
            <div className="review-1">
              <div className="unit-content">
                <div className="upper">
                  <Space size="large">
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-1" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-2" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-3" />
                    </Link>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
            <div className="semester-1">
              <div className="unit-content">
                <div className="upper">
                  <Space size="large">
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-4" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-5" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-6" />
                    </Link>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
            <div className="review-2">
              <div className="unit-content">
                <div className="upper">
                  <Space size="large">
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-7" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-8" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-9" />
                    </Link>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn"></div>
                </div>
              </div>
            </div>
            <div className="semester-2">
              <div className="unit-content">
                <div className="upper">
                  <Space size="large">
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-10" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-11" />
                    </Link>
                    <Link to="/grade/1/math/unit/1/map">
                      <div className="unit-btn unit-12" />
                    </Link>
                  </Space>
                </div>
                <div className="lower">
                  <div className="review-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitComponent;
