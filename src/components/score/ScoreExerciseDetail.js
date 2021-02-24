import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

const ScoreExerciseDetail = () => {
  const [attempData, setAttempData] = useState([]);
  const [pagination] = useState({
    pageSize: 5,
  });

  useEffect(() => {
    setAttempData(data);
  }, []);

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
      dataIndex: "id",
      align: "center",
      render: (record) => (
        <Link to={(location) => `${location.pathname}/overview/${record}`}>
          <button className="ant-btn-link">Overview</button>
        </Link>
      ),
    },
  ];

  return (
    <div className="score-container">
      <div className="score-title">
        <h1>Exercise 1</h1>
      </div>
      <div className="score-wrap">
        {attempData && (
          <Table
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

export default ScoreExerciseDetail;