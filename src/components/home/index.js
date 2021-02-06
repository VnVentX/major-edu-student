import React from "react";
import { Layout } from "antd";
import Annoucement from "./Annoucement";
import SlideShow from "./SlideShow";
import SubjectHome from "./SubjectHome";

const { Content } = Layout;

const index = () => {
  return (
    <Layout className="scence">
      <Content className="container">
        <SlideShow />
        <Annoucement />
        <SubjectHome />
      </Content>
    </Layout>
  );
};

export default index;
