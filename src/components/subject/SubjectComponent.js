import React from "react";
import { Link } from "react-router-dom";
import { Space } from "antd";

const SubjectComponent = () => {
  return (
    <div className="page">
      <div className="page-contain">
        <div className="subject-container">
          <Space size={200}>
            <Link to="math/unit">
              <button className="sub-btn">Math</button>
            </Link>
            <Link to="science/unit">
              <button className="sub-btn">Science</button>
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default SubjectComponent;
