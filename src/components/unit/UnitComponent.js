import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { Link, useHistory } from "react-router-dom";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import bg from "../../resources/img/unit/unit-bg.png";

const color = [
  "#D41FF1",
  "#881FF1",
  "#F1441F",
  "#8EBA13",
  "#059BA5",
  "#4C49F3",
  "#059BA5",
  "#F19D1F",
];
let itemColor = "";

const UnitComponent = () => {
  function randomColor(array) {
    itemColor = array[Math.floor(Math.random() * array.length)];
    return itemColor;
  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

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
      let subjectID = window.location.pathname.split("/")[2];
      let accountID = 1;
      await axios
        .post(
          `https://mathscienceeducation.herokuapp.com/subject/${subjectID}/unitView?accountId=${accountID}`
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoading(false);
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
            {loading ? (
              <div className="unit-content">
                <Spin size="large" />
              </div>
            ) : (
              data?.map((item, idx) => (
                <div key={idx} onLoad={randomColor(color)}>
                  <div className="unit-content">
                    <div
                      className="page-title"
                      style={{
                        position: "absolute",
                        zIndex: 10,
                        top: "-13%",
                        fontSize: "5em",
                        WebkitTextStrokeWidth: "6px",
                      }}
                    >
                      {item.subjectName}
                    </div>
                    {item.unit?.map((unit) => (
                      <Link
                        to={`${window.location.pathname}/unit/${unit.id}`}
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
                      <div className="progress-test">
                        <Link
                          to={`${window.location.pathname}/progress-test/${item.progressTest.id}`}
                          key={item.progressTest.id}
                        >
                          <div className="progress-test-btn">
                            <div className="oval-button" />
                            <h1>{item.progressTest.progressTestName}</h1>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </AwesomeSlider>
        </div>
      </div>
    </div>
  );
};

export default UnitComponent;
