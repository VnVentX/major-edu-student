import React from "react";
import { Link } from "react-router-dom";
import { Image } from 'antd';


const SubjectComponent = () => {
  return (
    <div className="page">
      <div className="page-contain">
      <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
        <Link to="math/unit">
          <button>Math</button>
        </Link>
        <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
        <Link to="science/unit">
          <button>Science</button>
        </Link>
      </div>
    </div>
  );
};

export default SubjectComponent;
