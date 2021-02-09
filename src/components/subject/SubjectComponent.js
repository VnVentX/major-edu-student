import React from "react";
import { Link } from "react-router-dom";

const SubjectComponent = () => {
  return (
    <div className="page">
      <div className="page-contain">
        <Link to="math/unit">
          <button>Math</button>
        </Link>
        <Link to="science/unit">
          <button>Science</button>
        </Link>
      </div>
    </div>
  );
};

export default SubjectComponent;
