import React from "react";
import leftImg from "../../resources/img/home/left-img.png";
import rightImg from "../../resources/img/home/right-img.png";

const MapComponent = () => {
  return (
    <div className="map-home">
      <div className="map-container">
        <div className="map-left">
          <img src={leftImg} alt={leftImg} />
        </div>
        <div className="map-right">
          <a href="https://www.google.com/maps/place/269A+Nguy%E1%BB%85n+Tr%E1%BB%8Dng+Tuy%E1%BB%83n,+Ph%C6%B0%E1%BB%9Dng+10,+Ph%C3%BA+Nhu%E1%BA%ADn,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh+70000,+Vietnam/@10.797863,106.670995,12z/data=!4m5!3m4!1s0x317529293429d6f5:0x5e51a16be7d67b10!8m2!3d10.7978629!4d106.6709951?hl=en-US">
            <img src={rightImg} alt={rightImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
