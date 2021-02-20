import React from "react";
import { Table } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import "antd/dist/antd.css";

const ExerciseComponent = () => {
  const history = useHistory();
  const location = useLocation();
  // const columns = [
  //   {
  //     title: "No",
  //     dataIndex: "id",
  //     width: "10%",
  //     render: (index) => index + 1,
  //     align: "center",
  //   },
  //   {
  //     title: "Exercises",
  //     dataIndex: "exerciseName",
  //     width: "90%",
  //     align: "center",
  //     render: (record) => (
  //       <Link to="/math/unit/1/map/exercise/1">{record}</Link>
  //     ),
  //   },
  // ];
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
    {
      id: 4,
      exerciseName: "Exercise 5",
    },
    {
      id: 5,
      exerciseName: "Exercise 6",
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
            {/* <Table
              className="exercise-table"
              rowKey={(record) => record.id}
              columns={columns}
              dataSource={data}
              pagination={false}
            /> */}
            {data?.map((i) => (
              <Link key={i.id} to={`${location.pathname}/${i.id}`}>
                <div className="exercise-btn">
                  <h1>{i.exerciseName}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseComponent;
