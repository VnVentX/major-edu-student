import React from "react";
import "../resources/css/home.css";
import { Layout } from "antd";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "../components/home/HeaderContainer";
import FooterContainer from "../components/home/FooterContainer";
import index from "../components/home";
import Notice from "./Notice";
import Subject from "./Subject";
import Score from "./Score";
import Profile from "./Profile";

const Home = (props) => {
  return (
    <Layout>
      <BrowserRouter>
        <HeaderContainer history={props.history} />
        <Switch>
          <Route path={["/", "/home"]} exact component={index} />
          <Route path="/notice" exact component={Notice} />
          <Route path="/subject" exact component={Subject} />
          <Route path="/score" exact component={Score} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        <FooterContainer />
      </BrowserRouter>
    </Layout>
  );
};

export default Home;
