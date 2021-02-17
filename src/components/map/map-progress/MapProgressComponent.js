import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const MapProgressComponent = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      width: "10%",
      render: (index) => index + 1,
      align: "center",
    },
    {
      title: "Exercises",
      dataIndex: "exerciseName",
      align: "center",
      render: (record) => (
        <Link to="/math/unit/1/map/exercise/1">{record}</Link>
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
    <div className="page">
      <div className="page-contain">
        <div className="exercise-container">
          <div className="exercise-title">
            <h1>Progress</h1>
          </div>
          <div className="exercise-wrap">
            <Table
              className="exercise-table"
              rowKey={(record) => record.id}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapProgressComponent;
