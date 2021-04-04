import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../resources/img/banner1.jpg";
import banner2 from "../../resources/img/banner2.png";

const SlideShow = () => {
  return (
    <div className="page">
      <div className="slide-show-container">
        <div className="slide-show">
          <AwesomeSlider
            className="slider"
            bullets={true}
            organicArrows={false}
            buttonContentRight={<div className="right-btn" />}
            buttonContentLeft={<div className="left-btn" />}
          >
            <div>
              <img className="slider-img" alt={banner1} src={banner1} />
            </div>
            <div>
              <img className="slider-img" alt={banner2} src={banner2} />
            </div>
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
