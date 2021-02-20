import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "antd";

const QuizResult = (props) => {
  const [count, setCount] = useState(0);
  let location = useLocation();
  let history = useHistory();

  //! Get Game path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const otherGamePath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });
  console.log(otherGamePath);
  useEffect(() => {
    var counter = count;
    props.answered.map((i) => {
      if (i.isCorrect === true) {
        counter++;
      }
      return counter;
    });
    setCount(counter);
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="game-container">
          <div className="game-wrap">
            <h1>
              Cleared with {count}/{props.answered.length} points
            </h1>
            <Button
              type="link"
              block
              onClick={() => history.push(otherGamePath[5])}
            >
              Do other Exercise
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
