import React from "react";
import { Table, Modal } from "antd";
import { Link, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";

const excercise = {
  id: 1,
  excerciseName: "Excercise 1",
};

const data = [
  {
    id: 0,
    startDate: "15 Jan 2021, 8:35AM",
    grade: 10,
  },
  {
    id: 1,
    startDate: "16 Jan 2021, 9:42AM",
    grade: 10,
  },
  {
    id: 2,
    startDate: "17 Jan 2021, 10:23AM",
    grade: 10,
  },
  {
    id: 3,
    startDate: "16 Jan 2021, 9:42AM",
    grade: 10,
  },
  {
    id: 4,
    startDate: "17 Jan 2021, 10:23AM",
    grade: 10,
  },
  {
    id: 5,
    startDate: "16 Jan 2021, 9:42AM",
    grade: 10,
  },
  {
    id: 6,
    startDate: "17 Jan 2021, 10:23AM",
    grade: 10,
  },
];

const ExcerciseDetailComponent = () => {
  const [detail, setDetail] = useState("");
  const [visible, setVisible] = useState(false);
  const [attempData, setAttempData] = useState([]);
  const [pagination] = useState({
    pageSize: 5,
  });

  const history = useHistory();

  useEffect(() => {
    setDetail(excercise);
    setAttempData(data);
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    let path = `/math/unit/1/map/excercise/${detail.id}/start`;
    history.push(path);
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
    <div className="page">
      <div className="page-contain">
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
          <Modal
            centered
            visible={visible}
            onOk={handleOk}
            onCancel={handelCancel}
          >
            <p>Do you want to do Excercise now?</p>
          </Modal>
          <div className="excercise-wrap">
            {attempData && (
              <Table
                className="excercise-table"
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={data}
                pagination={pagination}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcerciseDetailComponent;
