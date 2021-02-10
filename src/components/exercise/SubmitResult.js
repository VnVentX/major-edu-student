import React, { useState, useEffect } from "react";
import { Space, Table, Modal } from "antd";

const SubmitResult = (props) => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

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

  //! Modal Submit
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    props.handelSubmitResult();
    setVisible(false);
  };

  const handelCancel = () => {
    setVisible(false);
  };

  return (
    <div className="exercise-container">
      <div className="exercise-title">
        <h1>Exercises</h1>
      </div>
      <div className="exercise-wrap">
        <Table
          className="exercise-table"
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
          <button onClick={showModal} style={{ marginTop: 20 }}>
            Submit
          </button>
          <Modal
            centered
            visible={visible}
            onOk={handleOk}
            onCancel={handelCancel}
          >
            <p>Do you want to finish and submit Exercise?</p>
          </Modal>
        </Space>
      </div>
    </div>
  );
};

export default SubmitResult;
