import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import Carousel from "react-multi-carousel";
import { Link, useLocation, useHistory } from "react-router-dom";
import bg from "../../../resources/img/game/game-bg.png";

const gameBtn = ["1", "2", "3", "4"];

let gameBtnColor = "";

const GameComponent = () => {
  const [data, setData] = useState([
    {
      id: 1,
      gameName: "1",
    },
    {
      id: 2,
      gameName: "2",
    },
    {
      id: 3,
      gameName: "3",
    },
    {
      id: 4,
      gameName: "4",
    },
    {
      id: 5,
      gameName: "5",
    },
    {
      id: 6,
      gameName: "6",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    let header = document.getElementById("header");
    header.style.visibility = "visible";
    // async function getAllExercise() {
    //   let lessonID = window.location.pathname.split("/")[6];
    //   let accountID = 1;
    //   await axios
    //     .post(
    //       `https://mathscienceeducation.herokuapp.com/lesson/${lessonID}/exercises/student?accountId=${accountID}`
    //     )
    //     .then((res) => {
    //       setData(res.data);
    //       setLoading(false);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    // getAllExercise();
  }, []);

  //! Get Lesson path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const lessonPath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  function randomColor(array) {
    gameBtnColor = array[Math.floor(Math.random() * array.length)];
    return gameBtnColor;
  }

  return (
    <div className="page">
      <div className="back-btn" onClick={() => history.push(lessonPath[5])} />
      <div className="page-contain">
        <div className="game-container">
          <div className="page-title" style={{ marginTop: "10%" }}>
            1 2 3 GAME!
          </div>
          <div className="game-wrap">
            {loading ? (
              <Spin size="large" />
            ) : (
              data?.map((i) => (
                <div
                  key={i.id}
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                  onLoad={randomColor(gameBtn)}
                >
                  <Link to={`${location.pathname}/${i.id}`}>
                    <div className={`game-btn${gameBtnColor}`}>
                      <h1>
                        Game <br />
                        {i.gameName}
                      </h1>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameComponent;
