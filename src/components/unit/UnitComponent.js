import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Space } from "antd";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import bg from "../../resources/img/unit/unit-bg.png";

const color = ["blue", "green", "orange", "purple", "red", "yellow", "pink"];
let itemColor = "";

const UnitComponent = () => {
  function randomColor(array) {
    itemColor = array[Math.floor(Math.random() * array.length)];
    return itemColor;
  }
  const [data, setData] = useState([]);

  const history = useHistory();

  const subjectID = window.location.pathname.split("/")[2];

  //! Get Unit path
  const pathSnippets = window.location.pathname.split("/").filter((i) => i);
  const pathStack = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });
  const subjectPath = pathStack[0];

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getAllUnit() {
      await axios
        .get(
          `https://mathscienceeducation.herokuapp.com/subject/${subjectID}/unitView`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllUnit();
  }, []);

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center" }}>
      <div className="back-btn" onClick={() => history.push(subjectPath)} />
      <div className="unit-container">
        <div className="unit-wrap">
          <AwesomeSlider
            className="slider"
            bullets={false}
            organicArrows={false}
            buttonContentRight={<div className="right-btn" />}
            buttonContentLeft={<div className="left-btn" />}
          >
            {data?.map((item, idx) => (
              <div key={idx} onLoad={randomColor(color)}>
                <div className="unit-content">
                  <div className="unit-title" />

                  {item.unit?.map((unit) => (
                    <Link
                      to={`${window.location.pathname}/${unit.id}`}
                      key={unit.id}
                    >
                      <div
                        className="unit-btn"
                        style={{ backgroundColor: itemColor }}
                      >
                        <h1>Unit {unit.unitName}</h1>
                      </div>
                    </Link>
                  ))}
                  {item.progressTest && (
                    <div className="progress-test-btn">
                      <div className="oval-button" />
                      <h1>{item.progressTest.progressTestName}</h1>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default UnitComponent;
