import React from "react";
import { Layout } from "antd";
import "../resources/css/lesson.css";
import LessonComponent from "../components/lesson/LessonComponent";

const { Content } = Layout;

const Lesson = () => {
  return (
    <Layout>
      <Content className="container">
        <LessonComponent />
      </Content>
    </Layout>
  );
};

export default Lesson;
