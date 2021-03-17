import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner_science from "../../resources/img/banner_science.jpg";

const SlideShow = () => {
  return (
    <div className="page">
      <div className="slide-show">
        <AwesomeSlider
          className="slider"
          bullets={true}
          organicArrows={false}
          buttonContentRight={<div className="right-btn" />}
          buttonContentLeft={<div className="left-btn" />}
        >
          <div>
            <img
              className="slider-img"
              alt={banner_science}
              src={banner_science}
            />
          </div>
          <div>
            <img
              className="slider-img"
              alt={banner_science}
              src={banner_science}
            />
          </div>
          <div>
            <img
              className="slider-img"
              alt={banner_science}
              src={banner_science}
            />
          </div>
          <div>
            <img
              className="slider-img"
              alt={banner_science}
              src={banner_science}
            />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default SlideShow;
