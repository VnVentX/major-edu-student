import React, { useState, useEffect } from "react";
import { getID } from "../../helper/jwt";
import axios from "axios";
import bg from "../../resources/img/profile/profile-bg.png";

const ProfileComponent = () => {
  const [data, setData] = useState([]);
  const [isChangePass, setIsChangePass] = useState(false);
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isWrongInfo, setIsWrongInfo] = useState(false);
  const [isWrongPass, setIsWrongPass] = useState(false);
  const [isLengthError, setIsLengthError] = useState(false);

  useEffect(() => {
    document.body.style.background = `url('${bg}')`;
    document.body.style.backgroundSize = "cover";
    async function getStudentDetail() {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/student/account/${getID()}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getStudentDetail();
  }, []);

  const handleChangePass = () => {
    setIsChangePass(!isChangePass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length >= 6 || newPassword.length >= 6) {
      if (password === newPassword) {
        let formData = new FormData();
        formData.append("accountId", getID());
        formData.append("oldPassword", oldPassword);
        formData.append("newPassword", password);
        await axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/checkPassword/${getID()}`,
            formData
          )
          .then((res) => {
            console.log(res.data);
            handleChangePass();
          })
          .catch((e) => {
            console.log(e);
            setIsWrongInfo(true);
          });
      } else {
        setIsWrongInfo(true);
      }
    } else {
      setIsLengthError(true);
    }
  };

  return (
    <div className="page">
      <div className="page-contain">
        <div className="profile-container">
          {isChangePass ? (
            <>
              {isWrongInfo && (
                <div className="wrong-notice change">
                  <div
                    className="login-ok-btn"
                    onClick={() => setIsWrongInfo(false)}
                  >
                    <h2>OK</h2>
                  </div>
                </div>
              )}
              {isWrongPass && (
                <div className="wrong-notice wrong-pass">
                  <div
                    className="login-ok-btn"
                    onClick={() => setIsWrongPass(false)}
                  >
                    <h2>OK</h2>
                  </div>
                </div>
              )}
              {isLengthError && (
                <div className="wrong-notice length-error">
                  <div
                    className="login-ok-btn"
                    onClick={() => setIsLengthError(false)}
                  >
                    <h2>OK</h2>
                  </div>
                </div>
              )}
              <form className="login-form" style={{ width: "50%" }}>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    required="required"
                    placeholder="Old Password"
                    autoComplete="off"
                    minLength="6"
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="password">Old Password</label>
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    required="required"
                    placeholder="Password"
                    autoComplete="off"
                    minLength="6"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="password">New Password</label>
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="password"
                    name="confirm"
                    id="confirm"
                    required="required"
                    placeholder="Re-enter your password"
                    autoComplete="off"
                    minLength="6"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="confirm">Re-enter New Password</label>
                </div>
                <button
                  type="submit"
                  style={{
                    border: 0,
                    background: "transparent",
                    cursor: "pointer",
                    marginTop: 20,
                  }}
                  onClick={handleSubmit}
                >
                  <div className="progress-test-btn">
                    <div className="oval-button" />
                    <h1>Submit</h1>
                  </div>
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="student-logo" />
              <h1>School: {data.schoolName}</h1>
              <h1>Class: {data.className}</h1>
              <h1>ID: {data.studentId}</h1>
              <h1>Name: {data.fullName}</h1>
              <div
                className="progress-test-btn"
                style={{ width: 350 }}
                onClick={handleChangePass}
              >
                <div className="oval-button" />
                <h1>Change Password</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
