import React from "react";

const MapLessonComponent = () => {
  const path = window.location.pathname.split("/");
  const lesson = path[path.length - 1];

  return (
    <div className="page">
      <div className="page-contain">
        <div className="lesson-container">
          <div className="lesson-title">
            <h1>Lesson {lesson}</h1>
          </div>
          <div className="lesson-wrap">
            <div className="lesson-left"></div>
            <div className="lesson-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLessonComponent;
