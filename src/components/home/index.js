import React from "react";
import { Layout } from "antd";
import Annoucement from "./Annoucement";
import SlideShow from "./SlideShow";
import SubjectHome from "./SubjectHome";

const index = () => {
  return (
    <Layout>
      <SlideShow />
      <Annoucement />
      <SubjectHome />
    </Layout>
  );
};

export default index;
