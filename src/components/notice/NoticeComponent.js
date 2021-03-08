import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";

const NoticeComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllNews() {
      // You can await here
      const response = await axios(
        "http://mathscience.azurewebsites.net/announcement"
      );
      setData(response.data);
    }
    getAllNews();
  }, []);

  return (
    <div className="notice-bg">
      <div className="page">
        <div className="page-contain">
          <div className="notice-container">
            <div className="notice-page-title" />
            <div className="notice-wrap">
              {data?.map((i, idx) => (
                <div key={idx} className="outter-border">
                  <div className="inner-border">
                    <div className="notice-title">
                      <img src={shout} alt={shout} />
                      <div className="title-right">
                        <Link to={`${window.location.pathname}/${i.id}`}>
                          <h3>{i.title}</h3>
                        </Link>
                        <h4>{i.createdDate}</h4>
                      </div>
                    </div>
                    <div className="notice-content">
                      <p>{i.shortDescription}</p>
                    </div>
                    <Link to={`${window.location.pathname}/${i.id}`}>
                      See more...
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeComponent;
