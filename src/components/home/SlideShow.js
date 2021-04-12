import React, { useEffect, useState } from "react";
import axios from "axios";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const SlideShow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      await axios
        .get("https://mathscienceeducation.herokuapp.com/bannerImage/url")
        .then((res) => {
          setData(res.data.length === 0 ? [] : res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllSubject();
  }, []);

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
            {data?.map((i, idx) => (
              <div key={idx}>
                <img className="slider-img" alt={i} src={i} />
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
