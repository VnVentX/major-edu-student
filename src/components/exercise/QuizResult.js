import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "antd";

const QuizResult = (props) => {
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState("");
  let location = useLocation();
  let history = useHistory();

  //! Get Game path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const otherGamePath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  useEffect(() => {
    setCurrent(window.location.pathname.split("/")[3]);
    var counter = count;
    props.answered.map((i) => {
      if (i.isCorrect === true) {
        counter++;
      }
      return counter;
    });
    setCount(counter);
    submitResult();
  }, []);

  const submitResult = async () => {
    let exerciseID = "";
    let takenObj = JSON.stringify(props.question);
    if (window.location.pathname.split("/")[3] === "progress-test") {
      exerciseID = window.location.pathname.split("/")[6];
    } else {
      exerciseID = window.location.pathname.split("/")[8];
    }
    await axios
      .post("https://mathscienceeducation.herokuapp.com/exericseTaken", {
        accountId: 1,
        exerciseId: exerciseID,
        mark: 10,
        takenObject: takenObj,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="page">
      <div className="page-contain">
        <div className="result-container">
          <div className="game-wrap">
            <h1 style={{ fontSize: 42 }}>
              Cleared with {count}/{props.answered.length} points
            </h1>
            <Button
              type="link"
              block
              onClick={() => {
                if (current === "progress-test") {
                  history.push(otherGamePath[3]);
                } else {
                  history.push(otherGamePath[6]);
                }
              }}
              style={{ fontSize: 32 }}
            >
              {current === "progress-test"
                ? "Do other Test"
                : "Do other Exercise"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
