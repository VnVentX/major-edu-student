import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
          <img src={rightImg} alt={rightImg} />
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
