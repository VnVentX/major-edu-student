import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { Link, useHistory } from "react-router-dom";
import bg from "../../resources/img/unit/unit-detail-bg.png";

const UnitDetailComponent = () => {
  const [lesson, setLesson] = useState([]);
  const unitID = window.location.pathname.split("/")[4];
  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getAllUnit() {
      await axios
        .get(
          `https://mathscienceeducation.herokuapp.com/unit/${unitID}/lessons`
        )
        .then((res) => {
          setLesson(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllUnit();
  }, [unitID]);

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
        <div className="back-btn" onClick={() => history.push(unitPath)} />
        <div className="page-contain">
          <div className="unit-detail-container">
            <div className="unit-detail-wrap">
              <div className="general-title ">
                <h1>Unit {unit}</h1>
              </div>
              {lesson.length === 0 && <Spin size="large" />}
              {lesson?.map((i) => (
                <>
                  <Link
                    key={i.id}
                    to={`${window.location.pathname}/lesson/${i.id}`}
                  >
                    <div className="general-btn">
                      <div className="general-oval" />
                      <h1>{i.lessonName}</h1>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitDetailComponent;
