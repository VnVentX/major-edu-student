import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner_science from "../../resources/img/banner_science.jpg";

const SlideShow = () => {
  return (
    <div className="slide-show">
      <AwesomeSlider
        className="slider"
        bullets={false}
        organicArrows={false}
        buttonContentRight={<div className="right-btn" />}
        buttonContentLeft={<div className="left-btn" />}
      >
        <div>
          <img alt={banner_science} src={banner_science} />
        </div>
        <div>
          <img alt={banner_science} src={banner_science} />
        </div>
        <div>
          <img alt={banner_science} src={banner_science} />
        </div>
        <div>
          <img alt={banner_science} src={banner_science} />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default SlideShow;
