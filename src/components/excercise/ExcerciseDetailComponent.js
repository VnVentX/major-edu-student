import React, { useState } from "react";
import "antd/dist/antd.css";
import ExcerciseDetail from "./ExcerciseDetail";
import QuizComponent from "./QuizComponent";

const excercise = {
  id: 1,
  excerciseName: "Excercise 1",
};

const data = [
  {
    id: 0,
    startDate: "15 Jan 2021, 8:35AM",
    grade: 10,
  },
  {
    id: 1,
    startDate: "16 Jan 2021, 9:42AM",
    grade: 10,
  },
  {
    id: 2,
    startDate: "17 Jan 2021, 10:23AM",
    grade: 10,
  },
  {
    id: 3,
    startDate: "16 Jan 2021, 9:42AM",
    grade: 10,
  },
  {
    id: 4,
    startDate: "17 Jan 2021, 10:23AM",
    grade: 10,
  },
  {
    id: 5,
    startDate: "16 Jan 2021, 9:42AM",
    grade: 10,
  },
  {
    id: 6,
    startDate: "17 Jan 2021, 10:23AM",
    grade: 10,
  },
];

const ExcerciseDetailComponent = () => {
  const [isDoingQuiz, setIsDoingQuiz] = useState(false);

  //! Đi đến màn hình làm quiz (<QuizComponent />)
  const handelChangeIsDoingQuiz = () => {
    setIsDoingQuiz(!isDoingQuiz);
  };

  return (
    <div className="page">
      <div className="page-contain">
        {isDoingQuiz === false ? (
          <ExcerciseDetail
            excercise={excercise}
            data={data}
            handelChangeIsDoingQuiz={handelChangeIsDoingQuiz}
          />
        ) : isDoingQuiz === true ? (
          <div>
            <QuizComponent handelChangeIsDoingQuiz={handelChangeIsDoingQuiz} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExcerciseDetailComponent;
