import React, { useEffect } from "react";
import "../resources/css/score.css";
import ScoreComponent from "../components/score/ScoreComponent";

const Score = () => {
  useEffect(() => {
    var home = document.getElementById("home");
    var notice = document.getElementById("notice");
    var subject = document.getElementById("subject");
    var score = document.getElementById("score");
    var profile = document.getElementById("profile");
    home.classList.remove("header-active");
    notice.classList.remove("header-active");
    subject.classList.remove("header-active");
    profile.classList.remove("header-active");
    score.classList.add("header-active");
  }, []);

  return <ScoreComponent />;
};

export default Score;
