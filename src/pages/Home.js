import React, { useEffect } from "react";
import "../resources/css/home.css";
import { Layout } from "antd";
import {
  Switch,
  Route,
  BrowserRouter,
  useLocation,
  withRouter,
} from "react-router-dom";
import HeaderContainer from "../components/home/HeaderContainer";
import FooterContainer from "../components/home/FooterContainer";
import index from "../components/home";
import Notice from "./Notice";
import Subject from "./Subject";
import Score from "./Score";
import Profile from "./Profile";
import Unit from "./unit/Unit";
import UnitDetail from "./unit/UnitDetail";
import Map from "./Map";
import ProgressTest from "./ProgressTest";
import MapLesson from "./MapLesson";
import NoticeDetail from "./NoticeDetail";
import NotFound from "./NotFound";
import Exercise from "./exercise/Exercise";
import ExerciseDetail from "./exercise/ExerciseDetail";
import OverviewQuiz from "../components/exercise/OverviewQuiz";
import MapProgress from "./MapProgress";
import MapGame from "./game/MapGame";
import PlayGame from "../components/map/map-game/PlayGame";
import GameResult from "../components/map/map-game/GameResult";
import Lecture from "../components/map/map-lesson/Lecture";
import QuizComponent from "../components/exercise/QuizComponent";
import ScoreExercise from "../components/score/ScoreExercise";
import ScoreExerciseDetail from "../components/score/ScoreExerciseDetail";

const { Content } = Layout;

const Home = (props) => {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }

  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <div className="contents">
      <BrowserRouter>
        {/* header */}
        <HeaderContainer history={props.history} />
        {/* body */}
        <Layout className="scence">
          <Content className="container">
            <ScrollToTop>
              <Switch>
                <Route path={["/", "/home"]} exact component={index} />
                <Route path="/notice" exact component={Notice} />
                <Route
                  path="/notice/:noticeID"
                  exact
                  component={NoticeDetail}
                />
                <Route path="/subject" exact component={Subject} />
                <Route path="/score" exact component={Score} />
                <Route
                  path="/score/:subjectID"
                  exact
                  component={ScoreExercise}
                />
                <Route
                  path="/score/:subjectID/exercise/:exerciseID"
                  exact
                  component={ScoreExerciseDetail}
                />
                <Route
                  path="/score/:subjectID/exercise/:exerciseID/overview/:overviewID"
                  exact
                  component={OverviewQuiz}
                />
                <Route path="/profile" exact component={Profile} />
                <Route path="/subject/:subjectID" exact component={Unit} />
                {/* Flow mới bắt đầu từ đây */}
                <Route
                  path="/subject/:subjectID/unit/:unitID"
                  exact
                  component={UnitDetail}
                />
                <Route
                  path="/subject/:subjectID/progress-test/:progressTestID"
                  exact
                  component={ProgressTest}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID"
                  exact
                  component={MapLesson}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID/lecture"
                  exact
                  component={Lecture}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID/exercise"
                  exact
                  component={Exercise}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID/exercise/:exerciseID"
                  exact
                  component={QuizComponent}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID/game"
                  exact
                  component={MapGame}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID/game/:gameID"
                  exact
                  component={PlayGame}
                />
                <Route
                  path="/subject/:subjectID/unit/:unitID/lesson/:lessonID/game/:gameID/result"
                  exact
                  component={GameResult}
                />
                {/* 






                  //! Cắt ở đây







                 */}
                {/* Flow cũ */}
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
                <Route
                  path="/math/unit/:unitID/map/exercise"
                  exact
                  component={Exercise}
                />
                <Route
                  path="/math/unit/:unitID/map/exercise/:exerciseID"
                  exact
                  component={ExerciseDetail}
                />
                <Route
                  path="/math/unit/:unitID/map/exercise/:exerciseID/overview/:overviewID"
                  exact
                  component={OverviewQuiz}
                />
                <Route
                  path="/math/unit/:unitID/map/progress"
                  exact
                  component={MapProgress}
                />
                <Route
                  path="/math/unit/:unitID/map/game"
                  exact
                  component={MapGame}
                />
                <Route
                  path="/math/unit/:unitID/map/game/:gameID"
                  exact
                  component={PlayGame}
                />
                <Route
                  path="/math/unit/:unitID/map/game/:gameID/result"
                  exact
                  component={GameResult}
                />
                <Route component={NotFound} />
              </Switch>
            </ScrollToTop>
          </Content>
        </Layout>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
};

export default Home;
