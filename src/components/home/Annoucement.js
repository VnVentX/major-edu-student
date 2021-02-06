import React from "react";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";
import notice from "../../resources/img/home/notice-title.png";

const Annoucement = () => {
  return (
    <div className="page">
      <div className="page-contain">
        <div className="announcement-content">
          <img className="notice-img" src={notice} alt={notice} />
          <div className="notice-wrap">
            <div className="outter-border">
              <div className="inner-border">
                <div className="notice-title">
                  <img src={shout} alt={shout} />
                  <div className="title-right">
                    <h3>Title 1</h3>
                    <h4>01/01/2021, 10:00AM</h4>
                  </div>
                </div>
                <div className="notice-content">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada. Vestibulum tortor quam, feugiat vitae, ultricies
                    eget, tempor sit amet, ante.
                  </p>
                </div>
                <Link to="/notice/detail">See more...</Link>
              </div>
            </div>
            <div className="outter-border">
              <div className="inner-border">
                <div className="notice-title">
                  <img src={shout} alt={shout} />
                  <div className="title-right">
                    <h3>Title 1</h3>
                    <h4>01/01/2021, 10:00AM</h4>
                  </div>
                </div>
                <div className="notice-content">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Tempor sit amet, ante.
                  </p>
                </div>
                <Link to="/notice/detail">See more...</Link>
              </div>
            </div>
            <div className="outter-border">
              <div className="inner-border">
                <div className="notice-title">
                  <img src={shout} alt={shout} />
                  <div className="title-right">
                    <h3>Title 1</h3>
                    <h4>01/01/2021, 10:00AM</h4>
                  </div>
                </div>
                <div className="notice-content">
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
                  </p>
                </div>
                <Link to="/notice/detail">See more...</Link>
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
