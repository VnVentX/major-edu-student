import React, { useEffect } from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";

const data = [
  {
    unitFirst: { id: 1, unitName: "Unit 1" },
    unitSecond: { id: 2, unitName: "Unit 2" },
    progressTest: {
      id: 1,
      progressTestName: "Review 1",
    },
  },
  {
    unitFirst: { id: 3, unitName: "Unit 3" },
    unitSecond: { id: 4, unitName: "Unit 4" },
    progressTest: {
      id: 2,
      progressTestName: "Review 2",
    },
  },
  {
    unitFirst: { id: 5, unitName: "Unit 5" },
    progressTest: {
      id: 4,
      progressTestName: "Semester 1",
    },
  },
  {
    unitFirst: { id: 6, unitName: "Unit 6" },
    unitSecond: { id: 7, unitName: "Unit 7" },
    progressTest: {
      id: 5,
      progressTestName: "Review 3",
    },
  },
  {
    unitFirst: { id: 8, unitName: "Unit 8" },
    unitSecond: { id: 9, unitName: "Unit 9" },
    progressTest: {
      id: 6,
      progressTestName: "Review 4",
    },
  },
  {
    unitFirst: { id: 10, unitName: "Unit 10" },
    progressTest: {
      id: 7,
      progressTestName: "Semester 2",
    },
  },
];

const color = ["blue", "green", "orange", "purple", "red", "yellow"];
let itemColor = "";

const UnitComponent = () => {
  function shuffle(array) {
    itemColor = array[Math.floor(Math.random() * array.length)];
    return itemColor;
  }

  return (
    <div className="unit-bg">
      <div className="page">
        <div className="page-contain">
          <div className="unit-container">
            {/* <div className="unit-title">
              <h1>Unit</h1>
            </div> */}
            <div className="unit-wrap">
              <div className="unit-content">
                {data?.map((i, idx) => (
                  <div
                    key={idx}
                    className="unit-btn-row"
                    onLoad={shuffle(color)}
                  >
                    <Space size={120}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: 450,
                        }}
                      >
                        <Space size={110}>
                          {i.unitFirst && (
                            <Link
                              to={`${window.location.pathname}/${i.unitFirst.id}`}
                            >
                              <div className={`unit-btn ${itemColor}-1`}>
                                <h2>{i.unitFirst.unitName}</h2>
                              </div>
                            </Link>
                          )}
                          {i.unitSecond && (
                            <Link
                              to={`${window.location.pathname}/${i.unitSecond.id}`}
                            >
                              <div className={`unit-btn ${itemColor}-1`}>
                                <h2>{i.unitSecond.unitName}</h2>
                              </div>
                            </Link>
                          )}
                        </Space>
                      </div>
                      {i.progressTest && (
                        <Link to="/math/unit/1">
                          <div className={`unit-btn ${itemColor}-2`}>
                            <h2>{i.progressTest.progressTestName}</h2>
                          </div>
                        </Link>
                      )}
                    </Space>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitComponent;
