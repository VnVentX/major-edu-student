import React from "react";
import { Table, Modal } from "antd";
import { useState, useEffect } from "react";

const ExcerciseDetail = (props) => {
  const [detail, setDetail] = useState("");
  const [visible, setVisible] = useState(false);
  const [attempData, setAttempData] = useState([]);
  const [pagination] = useState({
    pageSize: 5,
  });

  //   const history = useHistory();

  useEffect(() => {
    setDetail(props.excercise);
    setAttempData(props.data);
  }, [props.data, props.excercise]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    props.handelChangeIsDoingQuiz();
  };

  const handelCancel = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      render: (index) => index + 1,
      align: "center",
      width: "10%",
    },
    {
      title: "Submitted Date",
      dataIndex: "startDate",
      align: "center",
      render: (record) => (
        <>
          <span>{record}</span>
        </>
      ),
    },
    {
      title: "Grade",
      dataIndex: "grade",
      align: "center",
      render: (grade) => <span>{grade}/10</span>,
    },
    {
      key: "x",
      title: "Action",
      dataIndex: "",
      align: "center",
      render: (record) => <button className="ant-btn-link">Overview</button>,
    },
  ];

  return (
    <div className="excercise-detail-container">
      <div className="excercise-title">
        <h1>{detail.excerciseName}</h1>
      </div>
      {attempData ? (
        <button className="excercise-btn" onClick={showModal}>
          Re-attemp
        </button>
      ) : (
        <button className="excercise-btn" onClick={showModal}>
          Attemp
        </button>
      )}
      <Modal centered visible={visible} onOk={handleOk} onCancel={handelCancel}>
        <p>Do you want to do Excercise now?</p>
      </Modal>
      <div className="excercise-wrap">
        {attempData && (
          <Table
            className="excercise-table"
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={attempData}
            pagination={pagination}
          />
        )}
      </div>
    </div>
  );
};

export default ExcerciseDetail;
