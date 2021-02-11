import React from "react";
import "../../resources/css/quiz.css";
import { useState, useEffect } from "react";
import { Pagination, Modal } from "antd";
import { data } from "./data";
import SubmitResult from "./SubmitResult";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setQuestions(data);
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  //Template for Submit Result
  useEffect(() => {
    questions.map((i) => {
      if (template.length < 6) {
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

  //! Đi mến màn hình submit quiz ()
  const handelChangeIsSubmitResult = () => {
    setIsSubmitResult(!isSubmitResult);
    handleChange(1);
  };

  //! Modal finish
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    handelChangeIsSubmitResult();
  };

  const handelCancel = () => {
    setVisible(false);
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
    <>
      {isSubmitResult ? (
        <SubmitResult
          answered={answered}
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
                            <h2>Question {index + 1}</h2>
                          </div>
                          <div className="question-text">
                            <h3>{item.questionText}</h3>
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
                                  var total = totalPage - 1;
                                  if (current <= total) {
                                    handleChange(current + 1);
                                  }
                                  if (current === total + 1) {
                                    handelChangeIsSubmitResult();
                                  }
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
                        <Pagination
                          // simple
                          pageSize={pageSize}
                          current={current}
                          total={totalPage}
                          onChange={handleChange}
                          style={{ marginTop: "100px" }}
                        />
                      </div>
                    </React.Fragment>
                  )
              )}
            </div>
            <button onClick={showModal}>Finish</button>
            <Modal
              centered
              visible={visible}
              onOk={handleOk}
              onCancel={handelCancel}
            >
              <p>Do you want to submit Exercise now?</p>
            </Modal>
          </div>
        </>
      )}
    </>
  );
};

export default QuizComponent;
