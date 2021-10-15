import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";

const LoginForm = (props) => {
  const [username, setUsername] = useState("va1010004");
  const [password, setPassword] = useState("123456");
  const [isWrongPass, setisWrongPass] = useState(false);

  const handleNotice = () => {
    setisWrongPass(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data === "") {
          window.location.href = "/login";
        } else {
          localStorage.setItem("token", "Bearer " + res.data);
          window.location.href = "/home";
        }
      })
      .catch((e) => {
        console.log(e);
        setisWrongPass(true);
      });
  };

  return (
    <>
      {isWrongPass && (
        <div className="wrong-notice pass">
          <div className="login-ok-btn" onClick={handleNotice}>
            <h2>OK</h2>
          </div>
        </div>
      )}
      <form className="login-form">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            required="required"
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-group">
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            required="required"
            placeholder="password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="action-group">
          <button
            type="submit"
            style={{
              border: 0,
              background: "transparent",
              cursor: "pointer",
              width: 244,
              height: 92,
            }}
            onClick={handleSubmit}
          >
            <div className="progress-test-btn">
              <div className="oval-button" />
              <h1>Login</h1>
            </div>
          </button>
          <Button
            className="login-action-btn"
            type="text"
            block
            onClick={props.handleChange}
          >
            Forgot password &gt;
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
