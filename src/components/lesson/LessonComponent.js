import React from "react";

const LessonComponent = () => {
  const path = window.location.pathname.split("/");
  const lesson = path[path.length - 1];

  return (
    <div className="lesson-container">
      <div className="lesson-title">
        <h1>Lesson {lesson}</h1>
      </div>
      <div className="lesson-wrap">
        <div className="review-1"></div>
        <div className="semester-1"></div>
      </div>
    </div>
  );
};

export default LessonComponent;
