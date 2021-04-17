import React, { useEffect } from "react";
import "../resources/css/notice.css";
import NoticeComponent from "../components/notice/NoticeComponent";

const Notice = () => {
  useEffect(() => {
    var home = document.getElementById("home");
    var notice = document.getElementById("notice");
    var subject = document.getElementById("subject");
    var score = document.getElementById("score");
    var profile = document.getElementById("profile");
    home.classList.remove("header-active");
    subject.classList.remove("header-active");
    profile.classList.remove("header-active");
    score.classList.remove("header-active");
    notice.classList.add("header-active");
  }, []);
  return <NoticeComponent />;
};

export default Notice;
