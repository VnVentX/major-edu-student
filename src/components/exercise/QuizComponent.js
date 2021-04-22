import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../resources/css/quiz.css";
import QuizResult from "./QuizResult";
import bg from "../../resources/img/quiz/quiz-bg.png";
import { correctSound, wrongSound, wrongSound1 } from "../../helper/sound";

const pageSize = 1;
//Template for Submit Result
var template = [];

const QuizComponent = () => {
  const [isSubmitResult, setIsSubmitResult] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    let header = document.getElementById("header");
    header.style.visibility = "hidden";
    getExerciseQuestion();
  }, []);

  const getExerciseQuestion = async () => {
    let exerciseID = "";
    if (window.location.pathname.split("/")[3] === "progress-test") {
      exerciseID = window.location.pathname.split("/")[6];
    } else {
      exerciseID = window.location.pathname.split("/")[8];
    }
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/exersise/${exerciseID}/questions`
      )
      .then((res) => {
        setQuestions(res.data.length === 0 ? [] : [...res.data]);
        setTotalPage(res.data.length / pageSize);
        setMinIndex(0);
        setMaxIndex(pageSize);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //Template for Submit Result
  useEffect(() => {
    questions?.map((i) => {
      if (template.length < questions?.length) {
        template.push({
          id: i.id,
          correct: undefined,
        });
      }
      return template;
    });
    setAnswered(template);
  }, [questions]);

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  const handleSelected = (question, answer, answerIndex) => {
    //Update isSelected for question list to change it's css
    const questionEle = questions.findIndex(
      (element) => element.id === question.id
    );
    //Map hết cái answer của question trả về và update isSelected thành false hết
    question.optionList.map((i) => {
      return (i.isSelected = false);
    });
    //Sau đó update option đã chọn thành true
    question.optionList[answerIndex].isSelected = true;
    //Tạo một mảng phụ copy questions (question list)
    const newQuestionList = Array.from(questions);
    //Update question của mảng phụ theo cái index đã match
    newQuestionList[questionEle] = question;
    //Set lại question list
    setQuestions([...newQuestionList]);

    //! Update template => Answered question
    const elementsIndex = answered.findIndex(
      (element) => element.id === question.id
    );
    if (elementsIndex > -1) {
      const result = Array.from(answered);
      result[elementsIndex].correct = answer.correct;
      result[elementsIndex].score = question.score;
      setAnswered(result);
    }
  };

  //! Check answer đúng hay sai
  const handelAnswerSubmit = async (idx) => {
    var counter = wrongCount;
    var total = totalPage - 1;
    if (answered[idx].correct === true) {
      let correct =
        correctSound[Math.floor(Math.random() * correctSound.length)];
      await correct.play();
      setWrongCount(0);
      if (current <= total) {
        setTimeout(() => {
          handleChange(current + 1);
        }, 1000);
      } else if (current === total + 1) {
        setTimeout(() => {
          handelChangeIsSubmitResult();
        }, 1000);
      }
    }
    if (answered[idx].correct === false) {
      let wrong = wrongSound[Math.floor(Math.random() * wrongSound.length)];
      if (counter === 1) {
        counter = 0;
        setWrongCount(0);
        if (current <= total) {
          wrong.play();
          setTimeout(() => {
            handleChange(current + 1);
          }, 1000);
        } else if (current === total + 1) {
          wrong.play();
          setTimeout(() => {
            handelChangeIsSubmitResult();
          }, 1000);
        }
      } else {
        wrongSound1.play();
        counter++;
        setWrongCount(counter);
        setTimeout(() => {}, 1000);
      }
    }
  };

  //! Đi mến màn hình submit quiz ()
  const handelChangeIsSubmitResult = () => {
    setIsSubmitResult(!isSubmitResult);
    handleChange(1);
  };

  //! Submit Result xong clear dữ liệu
  const handelSubmitResult = () => {
    template = [];
    setAnswered([]);
    setQuestions([]);
  };

  return (
    <div className="page">
      <div className="page-contain">
        {isSubmitResult ? (
          <QuizResult
            answered={answered}
            question={questions}
            handelChangeIsSubmitResult={handelChangeIsSubmitResult}
            handelSubmitResult={handelSubmitResult}
          />
        ) : (
          <>
            <div className="quiz-container">
              <div className="quiz-wrap">
                {questions?.map(
                  (item, index) =>
                    index >= minIndex &&
                    index < maxIndex && (
                      <React.Fragment key={index}>
                        <div id="showMe" className="quiz-left">
                          {item.questionImageUrl && (
                            <div className="question-img">
                              <img
                                src={item.questionImageUrl}
                                alt={item.questionImageUrl}
                                width="100%"
                                height="100%"
                              />
                            </div>
                          )}
                          <div className="question">
                            <div className="question-title">
                              <h1>Question {index + 1}</h1>
                              {item.questionAudioUrl && (
                                <div className="quiz-sound" />
                              )}
                            </div>
                            <div className="question-text">
                              <h2>{item.questionTitle}</h2>
                            </div>
                          </div>
                        </div>
                        <div id="showMe" className="quiz-right">
                          <div className="answer">
                            {item.optionList.map((a, i) => (
                              <div key={i} className="answer-item">
                                <div
                                  onClick={() => {
                                    handleSelected(item, a, i);
                                    handelAnswerSubmit(index);
                                  }}
                                >
                                  <div
                                    id="answer"
                                    className={
                                      a.isSelected === true &&
                                      a.correct === true
                                        ? "option-correct-btn"
                                        : a.isSelected === true &&
                                          a.correct === false
                                        ? "option-wrong-btn"
                                        : "option-btn"
                                    }
                                  >
                                    <div
                                      className={
                                        a.isSelected === true &&
                                        a.correct === true
                                          ? "option-correct-oval"
                                          : a.isSelected === true &&
                                            a.correct === false
                                          ? "option-wrong-oval"
                                          : "option-oval"
                                      }
                                    />
                                    <h1>
                                      {(i + 1) / 1 === 1
                                        ? "A. "
                                        : (i + 1) / 2 === 1
                                        ? "B. "
                                        : (i + 1) / 3 === 1
                                        ? "C. "
                                        : (i + 1) / 4 === 1
                                        ? "D. "
                                        : null}
                                      {a.optionText}
                                    </h1>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </React.Fragment>
                    )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
