import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const ExcerciseComponent = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      width: "10%",
      render: (index) => index + 1,
      align: "center",
    },
    {
      title: "Excercises",
      dataIndex: "excerciseName",
      width: "90%",
      align: "center",
      render: (record) => (
        <Link to="/math/unit/1/map/excercise/1">{record}</Link>
      ),
    },
  ];
  const data = [
    {
      id: 0,
      excerciseName: "Excercise 1",
    },
    {
      id: 1,
      excerciseName: "Excercise 2",
    },
    {
      id: 2,
      excerciseName: "Excercise 3",
    },
    {
      id: 3,
      excerciseName: "Excercise 4",
    },
  ];
  return (
    <div className="page">
      <div className="page-contain">
        <div className="excercise-container">
          <div className="excercise-title">
            <h1>Excercises</h1>
          </div>
          <div className="excercise-wrap">
            <Table
              className="excercise-table"
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

export default ExcerciseComponent;
