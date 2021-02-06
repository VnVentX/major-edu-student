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
import Unit from "./Unit";
import Map from "./Map";
import Lesson from "./Lesson";

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
          <Route path="/grade/1/math/unit" exact component={Unit} />
          <Route path="/grade/1/science/unit" exact component={Unit} />
          <Route path="/grade/1/math/unit/1/map" exact component={Map} />
          <Route path="/grade/1/math/unit/1/lesson/1" exact component={Lesson} />
          <Route path="/grade/1/math/unit/1/lesson/2" exact component={Lesson} />
        </Switch>
        <FooterContainer />
      </BrowserRouter>
    </Layout>
  );
};

export default Home;
