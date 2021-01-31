import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import HeaderContainer from "../components/home/HeaderContainer";
import FooterContainer from "../components/home/FooterContainer";
import index from "../components/home";

const Home = () => {
  return (
    <Layout>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={index} />
        <Route path="/notice" component={index} />
        <Route path="/subject" component={index} />
        <Route path="/score" component={index} />
        <Route path="/profile" component={index} />
      </Switch>
      <FooterContainer />
    </Layout>
  );
};

export default Home;
