import React, { useState } from "react";
import login_button from "../../resources/img/login-page/login-btn.png";
import { Button } from "antd";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isWrongPass, setisWrongPass] = useState(false);

  const handleNotice = () => {
    setisWrongPass(false);
  };

  const handleSubmit = (e) => {
    if (username !== "test" && password !== "12345678") {
      setisWrongPass(true);
    } else if (username === "test" && password === "12345678") {
      localStorage.setItem("token", "this is token");
      localStorage.setItem("user", "user");
      window.location.href = "/home";
    }
    e.preventDefault();
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
            <img src={login_button} alt={login_button} width="100%" />
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
