import React, { useState, useEffect } from "react";
import { getID } from "../../helper/jwt";
import axios from "axios";
import bg from "../../resources/img/profile/profile-bg.png";

const ProfileComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getStudentDetail() {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/student/${getID()}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getStudentDetail();
  }, []);

  return (
    <div className="page">
      <div className="page-contain">
        <div className="profile-container">
          <div className="student-logo" />
          <h1>School: {data.schoolName}</h1>
          <h1>Class: {data.className}</h1>
          <h1>Name: {data.fullName}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
