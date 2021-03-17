import React, { useEffect } from "react";
import Annoucement from "./Annoucement";
import SlideShow from "./SlideShow";
import SubjectHome from "./SubjectHome";
import bg from "../../resources/img/home/home-bg.png";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
  }, []);

  return (
    <>
      <SlideShow />
      <Annoucement />
      <SubjectHome />
    </>
  );
};

export default Index;
