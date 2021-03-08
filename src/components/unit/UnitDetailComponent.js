import React, { useState, useEffect } from "react";
import { Space } from "antd";
import { Link, useHistory } from "react-router-dom";

const data = [
  {
    lessonID: 1,
    lessonTitlle: "Lesson 1",
  },
  {
    lessonID: 2,
    lessonTitlle: "Lesson 2",
  },
];

const UnitDetailComponent = () => {
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    setLesson(data);
  }, []);

  const history = useHistory();

  const path = window.location.pathname.split("/");
  const unit = path[path.length - 1];

  //! Get Unit path
  const pathSnippets = window.location.pathname.split("/").filter((i) => i);
  const pathStack = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return url;
  });
  const unitPath = pathStack[2];

  return (
    <div className="unit-bg">
      <div className="page">
        <div
          className="arrow-btn left-arrow"
          onClick={() => history.push(unitPath)}
        >
          <h1>Unit</h1>
        </div>
        <div className="page-contain">
          <div className="unit-container">
            <div className="unit-detail-title">
              <h1>Unit {unit}</h1>
            </div>
            <Space size={50}>
              {lesson?.map((i) => (
                <Link
                  key={i.lessonID}
                  to={`${window.location.pathname}/lesson/${i.lessonID}`}
                >
                  <div className="unit-detai-btn">
                    <h1>{i.lessonTitlle}</h1>
                  </div>
                </Link>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitDetailComponent;
