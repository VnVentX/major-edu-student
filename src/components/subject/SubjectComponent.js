import React from "react";
import math from "../../resources/img/home/math.png";
import { Link } from "react-router-dom";

const SubjectComponent = () => {
  return (
    <div className="subject-bg">
      <div className="page">
        <div className="page-contain">
          <div className="subject-container">
            <div className="subject-home-title" />
            <div className="subject-home-content">
              <div className="subject-home-wrap">
                <div className="subject-outter-border">
                  <div className="subject-inner-border">
                    <img src={math} alt={math} />
                  </div>
                </div>
                <Link to="/math/unit">
                  <div className="math-btn" />
                </Link>
              </div>
              <div className="subject-home-wrap">
                <div className="subject-outter-border">
                  <div className="subject-inner-border">
                    <img src={math} alt={math} />
                  </div>
                </div>
                <Link to="/science/unit">
                  <div className="science-btn" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectComponent;
