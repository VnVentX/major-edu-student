import React from "react";
import { Link } from "react-router-dom";
import { Image } from 'antd';
import background from "../../resources/img/home/subject-home-bg.png";
import styles from "../../resources/css/subject.css";

const SubjectComponent = () => {
  return (
    
        <div className="subject-page">
        <div className="subject-page-container">
        <div className="lets-started"/>
        <div className="subject-page-sub">
          <div className="subject-science">
            <Image
              width={200}
              preview={false}
              src="https://www.schandpublishing.com/BookImages/schand-size180/9789352834389.jpg"
            />
            <Link to="science/unit">
              <button className="button-subject-science">Science</button>
            </Link>
          </div>
          <div className="subject-math ">
            <Image
              preview={false}
              width={200}
              src="https://www.wamc.org/sites/wamc/files/styles/x_large/public/201811/math-with-bad-drawings.jpg"
            />
            <Link to="math/unit">
              <button className="button-subject-math">Math</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default SubjectComponent;
