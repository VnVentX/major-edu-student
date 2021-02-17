import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const GameComponent = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      width: "10%",
      render: (index) => index + 1,
      align: "center",
    },
    {
      title: "Game",
      width: "90%",
      align: "center",
      render: (record) => (
        <Link to={(location) => `${location.pathname}/${record.id}`}>
          {record.gameName}
        </Link>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      gameName: "Game 1",
    },
    {
      id: 2,
      gameName: "Game 2",
    },
    {
      id: 3,
      gameName: "Game 3",
    },
    {
      id: 4,
      gameName: "Game 4",
    },
  ];

  return (
    <div className="page">
      <div className="page-contain">
        <div className="exercise-container">
          <div className="exercise-title">
            <h1>Game</h1>
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

export default GameComponent;
