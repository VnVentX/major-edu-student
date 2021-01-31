import React from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const SubjectHome = () => {
  return (
    <Content>
      <div className="subject-home">
        <div className="subject-home-container">
          <div className="subjects-home-content"></div>
        </div>
      </div>
    </Content>
  );
};

export default SubjectHome;
