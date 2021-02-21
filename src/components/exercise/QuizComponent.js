import React from "react";
import "../../resources/css/quiz.css";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import { data } from "./data";
import QuizResult from "./QuizResult";

const pageSize = 1;
//Template for Submit Result
var template = [];

const QuizComponent = (props) => {
  const [isSubmitResult, setIsSubmitResult] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    setQuestions(data);
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  //Template for Submit Result
  useEffect(() => {
    questions.map((i) => {
      if (template.length < data.length) {
        template.push({
          questionID: i.questionID,
          isCorrect: undefined,
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
      (element) => element.questionID === question.questionID
    );
    //Map hết cái answer của question trả về và update isSelected thành false hết
    question.answers.map((i) => {
      return (i.isSelected = false);
    });
    //Sau đó update option đã chọn thành true
    question.answers[answerIndex].isSelected = true;
    //Tạo một mảng phụ copy questions (question list)
    const newQuestionList = Array.from(questions);
    //Update question của mảng phụ theo cái index đã match
    newQuestionList[questionEle] = question;
    //Set lại question list
    setQuestions(newQuestionList);

    //! Update template => Answered question
    const elementsIndex = answered.findIndex(
      (element) => element.questionID === question.questionID
    );
    if (elementsIndex > -1) {
      const result = Array.from(answered);
      result[elementsIndex].isCorrect = answer.isCorrect;
      setAnswered(result);
    }
  };

  //! Check answer đúng hay sai
  const handelAnswerSubmit = (idx) => {
    var counter = wrongCount;
    var total = totalPage - 1;
    if (answered[idx].isCorrect === true) {
      const modal = Modal.success({
        content: "Correct answer",
        centered: true,
      });
      setWrongCount(0);
      if (current <= total) {
        setTimeout(() => {
          modal.destroy();
          handleChange(current + 1);
        }, 1000);
      } else if (current === total + 1) {
        setTimeout(() => {
          modal.destroy();
          handelChangeIsSubmitResult();
        }, 1000);
      }
    }
    if (answered[idx].isCorrect === false) {
      if (counter === 1) {
        console.log(counter);
        const modal = Modal.error({
          content: "Incorrect answer",
          centered: true,
        });
        counter = 0;
        setWrongCount(0);
        if (current <= total) {
          setTimeout(() => {
            modal.destroy();
            handleChange(current + 1);
          }, 1000);
        } else if (current === total + 1) {
          setTimeout(() => {
            modal.destroy();
            handelChangeIsSubmitResult();
          }, 1000);
        }
      } else {
        const modal = Modal.error({
          content: "Incorrect answer",
          centered: true,
        });
        counter++;
        setWrongCount(counter);
        setTimeout(() => {
          modal.destroy();
        }, 1000);
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
    //api here
    console.log(answered);
    //clearing logic for state
    template = [];
    questions.map((question) => {
      return question.answers.map((i) => {
        return (i.isSelected = false);
      });
    });
    setAnswered([]);
    setQuestions(questions);
    props.handelChangeIsDoingQuiz();
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
              <div className="quiz-title">
                <h1>Exercise</h1>
              </div>
              <div className="quiz-wrap">
                {questions?.map(
                  (item, index) =>
                    index >= minIndex &&
                    index < maxIndex && (
                      <React.Fragment key={index}>
                        <div className="quiz-left">
                          <img
                            src={item.questionImg}
                            alt={item.questionImg}
                            width="100%"
                            height="100%"
                          />
                        </div>
                        <div className="quiz-right">
                          <div className="question">
                            <div className="question-title">
                              <h1>Question {index + 1}</h1>
                            </div>
                            <div className="question-text">
                              <h2>{item.questionText}</h2>
                            </div>
                          </div>
                          <div className="answer">
                            {item.answers.map((a, i) => (
                              <div key={i} className="answer-item">
                                <div className="option">
                                  <h2>
                                    {(i + 1) / 1 === 1
                                      ? "A"
                                      : (i + 1) / 2 === 1
                                      ? "B"
                                      : (i + 1) / 3 === 1
                                      ? "C"
                                      : (i + 1) / 4 === 1
                                      ? "D"
                                      : (i + 1) / 5 === 1
                                      ? "E"
                                      : (i + 1) / 6 === 1
                                      ? "F"
                                      : (i + 1) / 7 === 1
                                      ? "G"
                                      : (i + 1) / 8 === 1
                                      ? "H"
                                      : (i + 1) / 9 === 1
                                      ? "I"
                                      : (i + 1) / 10 === 1
                                      ? "J"
                                      : null}
                                  </h2>
                                </div>
                                <button
                                  onClick={() => {
                                    handleSelected(item, a, i);
                                  }}
                                >
                                  <div
                                    id="answer"
                                    className={
                                      a.isSelected
                                        ? "option-text selected"
                                        : "option-text"
                                    }
                                  >
                                    <span>{a.answerText}</span>
                                  </div>
                                </button>
                              </div>
                            ))}
                          </div>
                          <button
                            onClick={() => {
                              handelAnswerSubmit(index);
                            }}
                          >
                            Submit Answer
                          </button>
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
