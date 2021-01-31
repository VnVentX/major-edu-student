import React from "react";
import { Layout } from "antd";
import SlideShow from "../components/home/SlideShow";
import HeaderContainer from "../components/home/HeaderContainer";
import Annoucement from "../components/home/Annoucement";
import FooterContainer from "../components/home/FooterContainer";

const Home = () => {
  return (
    <Layout>
      <HeaderContainer />
      <SlideShow />
      <Annoucement />
      <FooterContainer />
    </Layout>
  );
};

export default Home;
