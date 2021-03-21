import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space } from "antd";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import bg from "../../resources/img/notice/notice-bg.png";

const NoticeDetailComponent = () => {
  const [data, setData] = useState([]);
  const newsID = window.location.pathname.split("/")[2];

  const history = useHistory();

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getNewsDetail() {
      await axios
        .get(`https://mathscienceeducation.herokuapp.com/news/${newsID}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getNewsDetail();
  }, []);

  return (
    <div className="page">
      <div className="news-back-btn" onClick={() => history.goBack()} />
      <div className="page-contain">
        <div className="notice-container">
          <div className="notice-page-wrap">
            <div className="notice-outter-border">
              <div className="notice-inner-border">
                <Space direction="vertical" size="middle">
                  <div className="announce-title">
                    <h1>{data.newsTitle}</h1>
                  </div>
                  <div className="announce-date">
                    <span>{data.createdDate}</span>
                  </div>
                  <div className="annouce-content">
                    <h2>{ReactHtmlParser(data.newsContent)}</h2>
                  </div>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailComponent;
