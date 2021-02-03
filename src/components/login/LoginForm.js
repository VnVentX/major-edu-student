import React, { useState } from "react";
import login_button from "../../resources/img/login-button.png";
import logo from "../../resources/img/logo_major.png";
import { Button } from "antd";

const LoginForm = (props) => {
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("12345678");

  const handelSubmit = (e) => {
    if (username !== "test" && password !== "12345678") {
      window.location.href = "/login";
    } else if (username === "test" && password === "12345678") {
      localStorage.setItem("token", "this is token");
      localStorage.setItem("user", "user");
      window.location.href = "/home";
    }
    e.preventDefault();
  };

  return (
    <>
      <div className="title">
        <img src={logo} alt={logo} />
      </div>
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
            value="test"
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
            value="12345678"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <input type="checkbox" id="remember" name="remember" value="" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Button type="link" block onClick={props.handelChange}>
            Forgot password &gt;
          </Button>
        </div>
        <button
          type="submit"
          style={{ border: 0, background: "transparent", cursor: "pointer" }}
          onClick={handelSubmit}
        >
          <img src={login_button} alt={login_button} />
        </button>
      </form>
    </>
  );
};

export default LoginForm;
