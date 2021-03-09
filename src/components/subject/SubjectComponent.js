import React, { useState, useEffect } from "react";
import axios from "axios";
import math from "../../resources/img/home/math.png";
import { Link } from "react-router-dom";

const gradeID = 1;

const SubjectComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      // You can await here
      const response = await axios(
        `https://mathscience.azurewebsites.net/grade/${gradeID}/subject`
      );
      setData(response.data);
    }
    getAllSubject();
  }, []);

  return (
    <div className="subject-bg">
      <div className="page">
        <div className="page-contain">
          <div className="subject-container">
            <div className="subject-home-title" />
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

export default SubjectComponent;
