import React from "react";
import { Link } from "react-router-dom";
import shout from "../../resources/img/home/shout.png";
import notice from "../../resources/img/home/notice-title.png";

// import data
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    id: `${i + 1}`,
    title: `Title ${i + 1}`,
    date: "01/01/2021, 10:00AM",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et  malesuada. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  });
}

const Annoucement = () => {
  return (
    <div className="page">
      <div className="page-contain">
        <div className="announcement-content">
          <img className="notice-img" src={notice} alt={notice} />
          <div className="notice-wrap">
            {listData?.map((i, idx) => (
              <div key={idx} className="outter-border">
                <div className="inner-border">
                  <div className="notice-title">
                    <img src={shout} alt={shout} />
                    <div className="title-right">
                      <Link to={`notice/${i.id}`}>
                        <h3>{i.title}</h3>
                      </Link>
                      <h4>{i.date}</h4>
                    </div>
                  </div>
                  <div className="notice-content">
                    <p>{i.content}</p>
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
