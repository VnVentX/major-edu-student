import React, { useState, useEffect } from "react";
import axios from "axios";
import math from "../../resources/img/home/math.png";
import { Link } from "react-router-dom";

const gradeID = 1;

const SubjectHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      await axios
        .get(`https://mathscience.azurewebsites.net/grade/${gradeID}/subject`)
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
    <div className="subject-home">
      <div className="page">
        <div className="page-contain">
          <div className="subject-home-container">
            <div className="subject-home-title"/>
            <div className="subject-home-content">
              {data?.map((i, idx) => (
                <div key={idx} className="subject-home-wrap">
                  <div className="subject-outter-border">
                    <div className="subject-inner-border">
                      <img src={math} alt={math} />
                    </div>
                  </div>
                  <Link to={`subject/${i.id}/unit`}>
                    <div className="math-btn" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectHome;
