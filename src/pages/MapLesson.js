import React, { useEffect } from "react";
import bg from "../resources/img/unit/unit-detail-bg.png";
import "../resources/css/lesson.css";
import MapLessonComponent from "../components/map/map-lesson/MapLessonComponent";

const MapLesson = () => {
  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
  }, []);
  return <MapLessonComponent />;
};

export default MapLesson;
