import React, { useState, useEffect } from "react";
import { getID } from "../../helper/jwt";
import axios from "axios";
import bg from "../../resources/img/profile/profile-bg.png";

var checkOldPass = false;

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
        .get(`${process.env.REACT_APP_BASE_URL}/student/${getID()}`)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (oldPassword === "abc123456") {
      checkOldPass = true;
    } else {
      checkOldPass = false;
    }
    if (checkOldPass === true) {
      console.log("check");
      if (password.length >= 6 || newPassword.length >= 6) {
        if (password === newPassword) {
          //logic api đổi pass ở đây
          //đổi status thành isForgot = false, chuyển sang login
          // props.handleChange();
          console.log(oldPassword, password, newPassword);
          console.log("change pass success");
        } else {
          setIsWrongInfo(true);
        }
      } else {
        console.log("lenght");
        setIsLengthError(true);
      }
    } else {
      setIsWrongPass(true);
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
              <h1>ID: {data.id}</h1>
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
