import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space } from "antd";

const NoticeDetailComponent = () => {
  const [data, setData] = useState([]);
  const newsID = window.location.pathname.split("/")[2];
  useEffect(() => {
    async function getNewsDetail() {
      // You can await here
      const response = await axios(
        `https://mathscience.azurewebsites.net/announcement/${newsID}`
      );
      setData(response.data);
    }
    getNewsDetail();
  }, []);

  return (
    <div className="notice-bg">
      <div className="page">
        <div className="page-contain">
          <div className="notice-container">
            <div className="notice-detail-title" />
            <div className="notice-wrap">
              <div className="notice-outter-border">
                <div className="notice-inner-border">
                  <Space direction="vertical" size="middle">
                    <div className="announce-title">
                      <h1>{data.title}</h1>
                    </div>
                    <div className="announce-date">
                      <span>{data.createdDate}</span>
                    </div>
                    <div className="annouce-content">
                      <h2>{data.announcementContent}</h2>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailComponent;
