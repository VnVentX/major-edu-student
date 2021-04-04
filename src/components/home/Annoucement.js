import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";
import notice from "../../resources/img/home/notice-title.png";

const Annoucement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // async function getTop3News() {
    //   await axios
    //     .get("https://mathscience.azurewebsites.net/announcement/3newest")
    //     .then((res) => {
    //       setData(res.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // }
    // getTop3News();
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="announcement-content">
          <div className="notice-wrap">
            {/* {data?.map((i, idx) => (
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
            ))} */}
            <div className="notice-middle">
              <img className="shout" src={shout} alt={shout} />
              <div className="news-wrap">
                <div className="hot-news">
                  <h1>Hot News</h1>
                  <span>17/03/2021</span>
                </div>
                <div className="news-seperator" />
                <div className="news">
                  <div className="news-title">
                    <h2>Title 1</h2>
                  </div>
                  <span className="news-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit...
                  </span>
                  <div className="news-link">
                    <Link to={`notice/${1}`}>See more...</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="notice-middle">
              <img className="shout" src={shout} alt={shout} />
              <div className="news-wrap">
                <div className="hot-news">
                  <h1>Hot News</h1>
                  <span>17/03/2021</span>
                </div>
                <div className="news-seperator" />
                <div className="news">
                  <div className="news-title">
                    <h2>Title 1</h2>
                  </div>
                  <span className="news-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit...
                  </span>
                  <div className="news-link">
                    <Link to={`notice/${1}`}>See more...</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="notice-middle">
              <img className="shout" src={shout} alt={shout} />
              <div className="news-wrap">
                <div className="hot-news">
                  <h1>Hot News</h1>
                  <span>17/03/2021</span>
                </div>
                <div className="news-seperator" />
                <div className="news">
                  <div className="news-title">
                    <h2>Title 1</h2>
                  </div>
                  <span className="news-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit...
                  </span>
                  <div className="news-link">
                    <Link to={`notice/${1}`}>See more...</Link>
                  </div>
                </div>
              </div>
            </div>
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
