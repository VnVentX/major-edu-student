import React, { useEffect } from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";

const data = [
  {
    unit: [
      { id: 1, unitName: "Unit 1" },
      { id: 2, unitName: "Unit 2" },
    ],
    progressTest: {
      id: 1,
      progressTestName: "Review 1",
    },
  },
  {
    unit: [
      { id: 3, unitName: "Unit 4" },
      { id: 4, unitName: "Unit 3" },
    ],
    progressTest: {
      id: 2,
      progressTestName: "Review 2",
    },
  },
  {
    unit: [{ id: 5, unitName: "Unit 5" }],
    progressTest: {
      id: 4,
      progressTestName: "Semester 1",
    },
  },
  {
    unit: [
      { id: 6, unitName: "Unit 6" },
      { id: 7, unitName: "Unit 7" },
    ],
    progressTest: {
      id: 5,
      progressTestName: "Review 3",
    },
  },
  {
    unit: [
      { id: 8, unitName: "Unit 8" },
      { id: 9, unitName: "Unit 9" },
    ],
    progressTest: {
      id: 6,
      progressTestName: "Review 4",
    },
  },
  {
    unit: [{ id: 10, unitName: "Unit 10" }],
    progressTest: {
      id: 7,
      progressTestName: "Semester 2",
    },
  },
];

const color = ["blue", "green", "orange", "purple", "red", "yellow"];
let itemColor = "";

const UnitComponent = () => {
  function randomColor(array) {
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
                    onLoad={randomColor(color)}
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
                          {i.unit?.map((unit, idx) => (
                            <Link
                              key={idx}
                              to={`${window.location.pathname}/${unit.id}`}
                            >
                              <div className={`unit-btn ${itemColor}-1`}>
                                <h2>{unit.unitName}</h2>
                              </div>
                            </Link>
                          ))}
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
