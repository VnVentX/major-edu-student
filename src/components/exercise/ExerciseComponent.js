import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const ExerciseComponent = () => {
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
      width: "90%",
      align: "center",
      render: (record) => (
        <Link to="/math/unit/1/map/exercise/1">{record}</Link>
      ),
    },
  ];
  const data = [
    {
      id: 0,
      exerciseName: "Exercise 1",
    },
    {
      id: 1,
      exerciseName: "Exercise 2",
    },
    {
      id: 2,
      exerciseName: "Exercise 3",
    },
    {
      id: 3,
      exerciseName: "Exercise 4",
    },
  ];
  return (
    <div className="page">
      <div className="page-contain">
        <div className="exercise-container">
          <div className="exercise-title">
            <h1>Exercises</h1>
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

export default ExerciseComponent;
