import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";

const Annoucement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getTop3News() {
      await axios
        .get("https://mathscienceeducation.herokuapp.com/news/3newest")
        .then((res) => {
          setData(res.data.length === 0 ? [] : res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getTop3News();
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="announcement-content">
          <div className="page-title" style={{ marginBottom: 40 }}>
            News
          </div>
          <div className="notice-wrap">
            {data?.map((i, idx) => (
              <div key={idx} className="outter-border">
                <div className="inner-border">
                  <div className="notice-page-title">
                    <img src={shout} alt={shout} />
                    <div className="title-right">
                      <Link to={`notice/${i.id}`}>
                        <h3>{i.newsTitle}</h3>
                      </Link>
                      <h4>{i.createdDate}</h4>
                    </div>
                  </div>
                  <div className="notice-content">
                    <p>{i.shortDescription}</p>
                  </div>
                  <Link to={`notice/${i.id}`}>See more...</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/notice">
            <div className="progress-test-btn">
              <div className="oval-button" />
              <h1>See more</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
