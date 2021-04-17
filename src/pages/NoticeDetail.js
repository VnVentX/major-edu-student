import React, { useEffect } from "react";
import NoticeDetailComponent from "../components/notice-detail/NoticeDetailComponent";

const NoticeDetail = () => {
  useEffect(() => {
    var home = document.getElementById("home");
    var notice = document.getElementById("notice");
    var subject = document.getElementById("subject");
    var score = document.getElementById("score");
    var profile = document.getElementById("profile");
    profile.classList.remove("header-active");
    subject.classList.remove("header-active");
    home.classList.remove("header-active");
    score.classList.remove("header-active");
    notice.classList.add("header-active");
  }, []);
  return <NoticeDetailComponent />;
};

export default NoticeDetail;
