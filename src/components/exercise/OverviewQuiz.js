import React from "react";
import "../../resources/css/quiz.css";
import { useState, useEffect } from "react";
import { Pagination, Modal } from "antd";
import { useHistory } from "react-router-dom";

const pageSize = 1;

const data = [
  {
    id: 2,
    questionTitle: "choose the correct answer",
    questionImageUrl: null,
    questionAudioUrl: null,
    score: 1,
    optionList: [
      {
        id: 5,
        optionText: "three",
        correct: true,
        isSelected: true,
      },
      {
        id: 6,
        optionText: "six",
        correct: false,
        isSelected: false,
      },
      {
        id: 7,
        optionText: "three",
        correct: false,
        isSelected: false,
      },
      {
        id: 8,
        optionText: "two",
        correct: false,
        isSelected: false,
      },
    ],
  },
  {
    id: 6,
    questionTitle: "choose the correct answer",
    questionImageUrl: null,
    questionAudioUrl: null,
    score: 1,
    optionList: [
      {
        id: 14,
        optionText: "five",
        correct: true,
        isSelected: true,
      },
      {
        id: 15,
        optionText: "six",
        correct: false,
        isSelected: false,
      },
      {
        id: 16,
        optionText: "seven",
        correct: false,
        isSelected: false,
      },
      {
        id: 17,
        optionText: "ten",
        correct: false,
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
                          <div className="quiz-sound" />
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
                            <div>
                              <div
                                id="answer"
                                className={
                                  a.isSelected === true && a.correct === true
                                    ? "option-correct-btn"
                                    : a.isSelected === true &&
                                      a.correct === false
                                    ? "option-wrong-btn"
                                    : "option-btn"
                                }
                              >
                                <div
                                  className={
                                    a.isSelected === true && a.correct === true
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
