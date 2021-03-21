import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import shout from "../../resources/img/home/mini-shout.png";
import bg from "../../resources/img/notice/notice-bg.png";

const pageSize = 6;

const NoticeComponent = () => {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getAllNews() {
      await axios
        .get("https://mathscienceeducation.herokuapp.com/news?isStudent=true")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllNews();
  }, []);

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  return (
    <div className="notice-bg">
      <div className="page">
        <div className="page-contain">
          <div className="notice-container">
            <div className="notice-page-wrap ">
              {data?.map(
                (i, idx) =>
                  idx >= minIndex &&
                  idx < maxIndex && (
                    <div key={idx} className="outter-border">
                      <div className="inner-border">
                        <div className="notice-page-title">
                          <img src={shout} alt={shout} />
                          <div className="title-right">
                            <Link to={`${window.location.pathname}/${i.id}`}>
                              <h3>{i.newsTitle}</h3>
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
                  )
              )}
            </div>
            <Pagination
              pageSize={pageSize}
              current={current}
              total={data.length}
              onChange={handleChange}
              style={{ marginTop: 60 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeComponent;
