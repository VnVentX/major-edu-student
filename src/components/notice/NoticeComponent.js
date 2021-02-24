import React from "react";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";

// import data
const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    id: `${i + 1}`,
    title: `Title ${i + 1}`,
    date: "01/01/2021, 10:00AM",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et  malesuada. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  });
}

const NoticeComponent = () => {
  return (
    <div className="notice-bg">
      <div className="page">
        <div className="page-contain">
          <div className="notice-container">
            <div className="notice-page-title" />
            <div className="notice-wrap">
              {listData?.map((i, idx) => (
                <div key={idx} className="outter-border">
                  <div className="inner-border">
                    <div className="notice-title">
                      <img src={shout} alt={shout} />
                      <div className="title-right">
                        <Link to={`${window.location.pathname}/${i.id}`}>
                          <h3>{i.title}</h3>
                        </Link>
                        <h4>{i.date}</h4>
                      </div>
                    </div>
                    <div className="notice-content">
                      <p>{i.content}</p>
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
