import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";
import notice from "../../resources/img/home/notice-title.png";

const Annoucement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getTop3News() {
      // You can await here
      const response = await axios(
        "https://mathscience.azurewebsites.net/announcement/3newest"
      );
      setData(response.data);
    }
    getTop3News();
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="announcement-content">
          <img className="notice-img" src={notice} alt={notice} />
          <div className="notice-wrap">
            {data?.map((i, idx) => (
              <div key={idx} className="outter-border">
                <div className="inner-border">
                  <div className="notice-title">
                    <img src={shout} alt={shout} />
                    <div className="title-right">
                      <Link to={`notice/${i.id}`}>
                        <h3>{i.title}</h3>
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
            <div className="see-all-btn" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Annoucement;
