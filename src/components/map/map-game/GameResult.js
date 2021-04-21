import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "antd";

const GameResult = () => {
  let location = useLocation();
  let history = useHistory();

  //! Get Game path
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const otherGamePath = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });

  return (
    <div className="page">
      <div className="page-contain">
        <div className="result-container">
          <div className="quiz-result">
            <h1 style={{ marginBottom: 120 }}>Congratulation!</h1>
            <Button
              type="link"
              block
              onClick={() => {
                history.push(otherGamePath[6]);
              }}
              style={{ fontSize: 32 }}
            >
              Play other Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
