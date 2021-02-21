import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const ScoreComponent = () => {
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Exercises",
        align: "center",
        render: (record) => (
          <Link to={`${window.location.pathname}/${record.id}`}>
            {record.exerciseName}
          </Link>
        ),
      },
      {
        title: "Grade",
        dataIndex: "grade",
        align: "center",
      },
      {
        title: "Status",
        dataIndex: "status",
        align: "center",
      },
    ];

    const data = [
      {
        id: 0,
        exerciseName: "Exercise 1",
        grade: 10,
        status: "Done",
      },
      {
        id: 1,
        exerciseName: "Exercise 2",
        grade: 10,
        status: "Done",
      },
      {
        id: 2,
        exerciseName: "Exercise 3",
        grade: 10,
        status: "Done",
      },
      {
        id: 3,
        exerciseName: "Exercise 4",
        grade: 10,
        status: "Done",
      },
      {
        id: 4,
        exerciseName: "Exercise 5",
        grade: 0,
        status: "Not Done",
      },
    ];

    return (
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const unitCol = [
    {
      title: "Unit",
      dataIndex: "unitName",
      align: "center",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
    },
  ];
  const unitData = [
    {
      id: 0,
      unitName: "Unit 1",
      grade: 10,
      status: "Done",
    },
    {
      id: 1,
      unitName: "Unit 2",
      grade: 10,
      status: "Done",
    },
    {
      id: 2,
      unitName: "Unit 3",
      grade: 10,
      status: "Done",
    },
    {
      id: 3,
      unitName: "Unit 4",
      grade: 10,
      status: "Done",
    },
    {
      id: 4,
      unitName: "Unit 5",
      grade: 8,
      status: "Not Done",
    },
  ];

  return (
    <div className="page">
      <div className="page-contain">
        <div className="score-container">
          <div className="score-title">
            <h1>Math</h1>
          </div>
          <div className="score-wrap">
            <Table
              rowKey={(record) => record.id}
              columns={unitCol}
              dataSource={unitData}
              expandable={{ expandedRowRender }}
            />
          </div>
          <div className="score-title">
            <h1>Science</h1>
          </div>
          <div className="score-wrap">
            <Table
              rowKey={(record) => record.id}
              columns={unitCol}
              dataSource={unitData}
              expandable={{ expandedRowRender }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreComponent;
