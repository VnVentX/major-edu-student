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
        <div className="quiz-container">
          <div className="quiz-title">
            <h1>Overview</h1>
          </div>
          <div className="quiz-wrap">
            {questions?.map(
              (item, index) =>
                index >= minIndex &&
                index < maxIndex && (
                  <React.Fragment key={index}>
                    <div className="quiz-left">
                      <img src={item.questionImg} alt={item.questionImg} />
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
                            <button>
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
            <p>Do you want to finish reviewing now?</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default OverviewQuiz;
