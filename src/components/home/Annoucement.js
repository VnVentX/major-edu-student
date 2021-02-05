import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";
import notice from "../../resources/img/home/notice-title.png";

const { Content } = Layout;
const Annoucement = () => {
  return (
    <Content className="site-layout">
      <div className="announcement">
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
                <a href="#">See more...</a>
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
                <a href="#">See more...</a>
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
                <a href="#">See more...</a>
              </div>
            </div>
          </div>
          <Link to="/notice">
            <div className="see-all-btn" />
          </Link>
        </div>
      </div>
    </Content>
  );
};

export default Annoucement;
