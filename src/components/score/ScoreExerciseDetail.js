import React, { useState, useEffect } from "react";
import axios from "axios";
import { getID } from "../../helper/jwt";
import { Table } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import bg from "../../resources/img/score/score-bg.png";

const ScoreExerciseDetail = () => {
  const [attempData, setAttempData] = useState([]);
  const [pagination] = useState({
    pageSize: 5,
  });

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getExerciseTakenByID() {
      let exerciseID = window.location.pathname.split("/")[4];
      let accountID = getID();
      await axios
        .post(
          `https://mathscienceeducation.herokuapp.com/exerciseTaken/all?accountId=${accountID}&exerciseId=${exerciseID}`
        )
        .then((res) => {
          setAttempData(res.data.lenght === 0 ? [] : res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getExerciseTakenByID();
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "index",
      render: (text, record, index) => `${index + 1}`,
      width: "10%",
    },
    {
      title: "Submitted Date",
      dataIndex: "createdDate",
      align: "center",
    },
    {
      title: "Grade",
      dataIndex: "totalScore",
      align: "center",
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
      <div className="score-detail-wrap">
        <div className="general-title ">
          <h1>Exercise</h1>
        </div>
        <div className="record-wrap">
          {attempData && (
            <Table
              rowKey={(record) => record.id}
              columns={columns}
              dataSource={attempData}
              pagination={pagination}
              className="exercise-table"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreExerciseDetail;
