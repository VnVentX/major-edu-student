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
import MapLesson from "./MapLesson";
import NoticeDetail from "./NoticeDetail";
import NotFound from "./NotFound";

const { Content } = Layout;

const Home = (props) => {
  return (
    <div className="contents">
      <BrowserRouter>
        <HeaderContainer history={props.history} />
        <Layout className="scence">
          <Content className="container">
            <Switch>
              <Route path={["/", "/home"]} exact component={index} />
              <Route path="/notice" exact component={Notice} />
              <Route path="/notice/detail" exact component={NoticeDetail} />
              <Route path="/subject" exact component={Subject} />
              <Route path="/score" exact component={Score} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/math/unit" exact component={Unit} />
              <Route path="/science/unit" exact component={Unit} />
              <Route path="/math/unit/:unitID/map" exact component={Map} />
              <Route
                path="/math/unit/:unitID/map/lesson/:lessonID"
                exact
                component={MapLesson}
              />
              <Route
                path="/math/unit/:unitID/map/lesson/:lessonID"
                exact
                component={MapLesson}
              />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
};

export default Home;
