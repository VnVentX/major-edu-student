import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "../../resources/img/home/subject-bg.png";
import { Link } from "react-router-dom";

const gradeID = 1;

const SubjectComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getAllSubject() {
      await axios
        .get(
          `https://mathscienceeducation.herokuapp.com/grade/${gradeID}/subjects`
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllSubject();
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="subject-container">
          <div className="subject-home-content">
            {data?.map((i, idx) => (
              <div key={idx} className="subject-home-wrap">
                <div className="subject-outter-border">
                  <div className="subject-inner-border">
                    <img src={i.imageUrl} alt={i.imageUrl} />
                  </div>
                </div>
                <Link to={`/subject/${i.id}`}>
                  <div className="subject-btn">
                    <h1>{i.subjectName}</h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="subject-footer" />
        </div>
      </div>
    </div>
  );
};

export default SubjectComponent;
