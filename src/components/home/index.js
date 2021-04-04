import React, { useEffect } from "react";
import Annoucement from "./Annoucement";
import SlideShow from "./SlideShow";
import SubjectHome from "./SubjectHome";
import bg from "../../resources/img/home/home-bg.png";
import MapComponent from "./MapComponent";

const Index = () => {
  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    // let header = document.getElementById("header");
    // header.style.visibility = "hidden";
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
