import React from "react";
import "../../resources/css/quiz.css";
import { useState, useEffect } from "react";
import { Pagination, Modal } from "antd";
import { useHistory } from "react-router-dom";

const pageSize = 1;

const data = [
  {
    questionID: 1,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionAudio: "",
    questionImg:
      "https://image.shutterstock.com/z/stock-vector-illustration-of-a-kid-answering-test-questions-82843036.jpg",
    answers: [
      {
        answerText: "Option 1",
        isCorrect: true,
        isSelected: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    questionID: 2,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionAudio: "",
    questionImg:
      "https://image.shutterstock.com/z/stock-vector-illustration-of-a-kid-answering-test-questions-82843036.jpg",
    answers: [
      {
        answerText: "Option 1",
        isCorrect: true,
        isSelected: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    questionID: 3,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionAudio: "",
    questionImg:
      "https://image.shutterstock.com/z/stock-vector-illustration-of-a-kid-answering-test-questions-82843036.jpg",
    answers: [
      {
        answerText: "Option 1",
        isCorrect: true,
        isSelected: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    questionID: 4,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionAudio: "",
    questionImg:
      "https://image.shutterstock.com/z/stock-vector-illustration-of-a-kid-answering-test-questions-82843036.jpg",
    answers: [
      {
        answerText: "Option 1",
        isCorrect: true,
        isSelected: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    questionID: 5,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionAudio: "",
    questionImg:
      "https://thumbs.dreamstime.com/b/frame-template-design-kid-science-lab-illustration-155174789.jpg",
    answers: [
      {
        answerText: "Option 1",
        isCorrect: true,
        isSelected: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
  {
    questionID: 6,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionAudio: "",
    questionImg:
      "https://thumbs.dreamstime.com/b/frame-template-design-kid-science-lab-illustration-155174789.jpg",
    answers: [
      {
        answerText: "Option 1",
        isCorrect: true,
        isSelected: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
        isSelected: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
        isSelected: false,
      },
    ],
  },
];

const OverviewQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  let history = useHistory();

  useEffect(() => {
    setQuestions(data);
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  //! Modal finish
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    history.goBack();
  };

  const handelCancel = () => {
    setVisible(false);
  };

  return (
    <div className="page">
      <div className="page-contain">
        <div className="quiz-overview-container ">
          <div className="unit-detail-title">Overview</div>
          <div className="quiz-wrap">
            {questions?.map(
              (item, index) =>
                index >= minIndex &&
                index < maxIndex && (
                  <React.Fragment key={index}>
                    <div id="showMe" className="quiz-left">
                      {item.questionImg && (
                        <div className="question-img">
                          <img
                            src={item.questionImg}
                            alt={item.questionImg}
                            width="100%"
                            height="100%"
                          />
                        </div>
                      )}
                      <div className="question">
                        <div className="question-title">
                          <h1>Question {index + 1}</h1>
                          <div className="quiz-sound" />
                        </div>
                        <div className="question-text">
                          <h2>{item.questionText}</h2>
                        </div>
                      </div>
                    </div>
                    <div id="showMe" className="quiz-right">
                      <div className="answer">
                        {item.answers.map((a, i) => (
                          <div key={i} className="answer-item">
                            <div>
                              <div
                                id="answer"
                                className={
                                  a.isSelected === true && a.isCorrect === true
                                    ? "option-correct-btn"
                                    : a.isSelected === true &&
                                      a.isCorrect === false
                                    ? "option-wrong-btn"
                                    : "option-btn"
                                }
                              >
                                <div
                                  className={
                                    a.isSelected === true &&
                                    a.isCorrect === true
                                      ? "option-correct-oval"
                                      : a.isSelected === true &&
                                        a.isCorrect === false
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
                                  {a.answerText}
                                </h1>
                              </div>
                            </div>
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
          <button onClick={showModal} style={{ marginBottom: 30 }}>
            Finish
          </button>
          <Modal
            centered
            visible={visible}
            onOk={handleOk}
            onCancel={handelCancel}
          >
            <p>Do you want to finish reviewing now?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default OverviewQuiz;
