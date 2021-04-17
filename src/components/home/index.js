import React, { useEffect } from "react";
import Annoucement from "./Annoucement";
import SlideShow from "./SlideShow";
import SubjectHome from "./SubjectHome";
import bg from "../../resources/img/home/home-bg.png";
import MapComponent from "./MapComponent";

const Index = () => {
  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    var home = document.getElementById("home");
    var notice = document.getElementById("notice");
    var subject = document.getElementById("subject");
    var score = document.getElementById("score");
    var profile = document.getElementById("profile");
    notice.classList.remove("header-active");
    subject.classList.remove("header-active");
    profile.classList.remove("header-active");
    score.classList.remove("header-active");
    home.classList.add("header-active");
  }, []);

  return (
    <>
      <SlideShow />
      <Annoucement />
      <SubjectHome />
      <MapComponent />
    </>
  );
};

export default Index;
