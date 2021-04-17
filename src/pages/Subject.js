import React, { useEffect } from "react";
import "../resources/css/subject.css";
import SubjectComponent from "../components/subject/SubjectComponent";

const Subject = () => {
  useEffect(() => {
    var home = document.getElementById("home");
    var notice = document.getElementById("notice");
    var subject = document.getElementById("subject");
    var score = document.getElementById("score");
    var profile = document.getElementById("profile");
    home.classList.remove("header-active");
    notice.classList.remove("header-active");
    profile.classList.remove("header-active");
    score.classList.remove("header-active");
    subject.classList.add("header-active");
  }, []);
  return <SubjectComponent />;
};

export default Subject;
