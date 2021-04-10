import React from "react";
import "../../resources/css/quiz.css";
import { useState, useEffect } from "react";
import { Pagination, Modal } from "antd";
import { useHistory } from "react-router-dom";

const pageSize = 1;

const data = [
  {
    id: 28,
    questionTitle: "Question for Math",
    questionImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/images%2F087be7c6-4bc6-4333-8b96-6de6c31a2083png?alt=media&token=6bf14f45-3fbe-472a-bb3a-0f35d9369a91",
    questionAudioUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/audios%2F8eb58ca5-9f79-4d0a-b70a-115d0325d404mp3?alt=media&token=f49f3be7-f8e0-4cde-8624-6206f4dd6ffc",
    score: 1,
    optionList: [
      {
        id: 91,
        optionText: "A",
        correct: false,
      },
      {
        id: 92,
        optionText: "B",
        correct: false,
      },
      {
        id: 93,
        optionText: "C",
        correct: false,
      },
      {
        id: 94,
        optionText: "D",
        correct: true,
        isSelected: true,
      },
    ],
  },
  {
    id: 29,
    questionTitle: "Question for Unit 1",
    questionImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/images%2F27a18af1-a8aa-4756-b044-89c9c9eb0bf0png?alt=media&token=fed04af3-bf51-41ee-8253-db65c2f3fffe",
    questionAudioUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/audios%2F5491d674-c444-4333-9d83-e94d35c6f802mp3?alt=media&token=42317bf8-1b27-4538-b4d0-1731aab6e50e",
    score: 1,
    optionList: [
      {
        id: 95,
        optionText: "A",
        correct: false,
        isSelected: true,
      },
      {
        id: 96,
        optionText: "B",
        correct: false,
      },
      {
        id: 97,
        optionText: "C",
        correct: true,
      },
      {
        id: 98,
        optionText: "D",
        correct: false,
      },
    ],
  },
  {
    id: 30,
    questionTitle: "Test Question math for unit 1",
    questionImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/images%2Fcac862e5-b27a-4a45-b917-eec3f5585bb1png?alt=media&token=59cd2d1b-4bf6-43bc-ad4e-066830f311e0",
    questionAudioUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/audios%2F046d76c7-b937-412f-9f03-e2c3e11f8710mp3?alt=media&token=967667e8-36a9-4c34-b9f1-f2cac4ec35d5",
    score: 1,
    optionList: [
      {
        id: 99,
        optionText: "A",
        correct: false,
      },
      {
        id: 100,
        optionText: "B",
        correct: false,
        isSelected: true,
      },
      {
        id: 101,
        optionText: "C",
        correct: true,
      },
      {
        id: 102,
        optionText: "D",
        correct: false,
      },
    ],
  },
  {
    id: 31,
    questionTitle: "Test Question math for unit 1",
    questionImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/images%2F92bef257-53b7-493e-8496-dc7e16a3e605png?alt=media&token=caf195ba-62af-4a6b-a287-0f294821ef6d",
    questionAudioUrl:
      "https://firebasestorage.googleapis.com/v0/b/mathscience-e425d.appspot.com/o/audios%2Fd8d2a8ca-6c72-4297-9f0d-5c08982a37f1mp3?alt=media&token=491ca7b4-9ab0-4b6d-a52a-e11cd8ac5018",
    score: 1,
    optionList: [
      {
        id: 103,
        optionText: "Option 1",
        correct: true,
        isSelected: true,
      },
      {
        id: 104,
        optionText: "Option 2",
        correct: false,
      },
      {
        id: 105,
        optionText: "Option 3",
        correct: false,
      },
      {
        id: 106,
        optionText: "Option 4",
        correct: false,
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
