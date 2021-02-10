import React, { useState, useEffect } from "react";
import { Space, Table } from "antd";

const SubmitResult = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.answered);
  }, []);

  const columns = [
    {
      title: "Question",
      dataIndex: "questionID",
      width: "10%",
      render: (index) => index,
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "isCorrect",
      width: "90%",
      align: "center",
      render: (record) => (
        <>{record === undefined ? "Not Answered" : "Answered"}</>
      ),
    },
  ];

  return (
    <div className="excercise-container">
      <div className="excercise-title">
        <h1>Excercises</h1>
      </div>
      <div className="excercise-wrap">
        <Table
          className="excercise-table"
          rowKey={(record) => record.questionID}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <Space direction="vertical" align="center">
          <button
            onClick={props.handelChangeIsSubmitResult}
            style={{ marginTop: 50 }}
          >
            Continue Do Quiz
          </button>
          <button
            onClick={props.handelChangeIsDoingQuiz}
            style={{ marginTop: 20 }}
          >
            Submit
          </button>
        </Space>
      </div>
    </div>
  );
};

export default SubmitResult;
