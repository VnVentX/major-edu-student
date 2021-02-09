import React from "react";
import { useState, useEffect } from "react";
import { Pagination } from "antd";

const data = [
  {
    questionID: 1,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionUrl: "",
    questionImg:
      "https://image.shutterstock.com/z/stock-vector-illustration-of-a-kid-answering-test-questions-82843036.jpg",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
  {
    questionID: 2,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    // questionAudio: "",
    // questionImg: "",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
  {
    questionID: 3,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionUrl: "",
    questionImg: "",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
  {
    questionID: 4,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionUrl: "",
    questionImg: "",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
  {
    questionID: 5,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionUrl: "",
    questionImg: "",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
  {
    questionID: 6,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionUrl: "",
    questionImg: "",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
  {
    questionID: 7,
    questionText:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationulla",
    questionUrl: "",
    questionImg: "",
    answer: [
      {
        answerText: "Option 1",
        isCorrect: true,
      },
      {
        answerText: "Option 2",
        isCorrect: false,
      },
      {
        answerText: "Option 3",
        isCorrect: false,
      },
      {
        answerText: "Option 4",
        isCorrect: false,
      },
    ],
  },
];

const pageSize = 1;

const QuizComponent = () => {
  const [question, setQuestion] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [answered, setAnswered] = useState([]);

  useEffect(() => {
    setQuestion(data);
    setTotalPage(data.length / pageSize);
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, []);

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  const handleSelected = (question, answer) => {
    const data = {
      questionID: question.questionID,
      isCorrect: answer.isCorrect,
    };
    const elementsIndex = answered.findIndex(
      (element) => element.questionID === question.questionID
    );
    if (elementsIndex === -1) {
      setAnswered([...answered, data]);
    }
    if (elementsIndex > -1) {
      const result = Array.from(answered);
      result[elementsIndex].isCorrect = answer.isCorrect;
      setAnswered(result);
    }
  };

  return (
    <div className="page">
      <div className="page-contain">
        <div className="quiz-container">
          <div className="quiz-wrap">
            {question?.map(
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
                        {item.answer.map((a, i) => (
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
                                handleSelected(item, a);
                                var total = totalPage - 1;
                                if (current <= total) {
                                  handleChange(current + 1);
                                }
                              }}
                            >
                              <div className="option-text">
                                <span>{a.answerText}</span>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                      <Pagination
                        simple
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
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
