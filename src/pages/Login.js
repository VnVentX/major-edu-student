import React, { useState } from "react";
import ForgotForm from "../components/login/ForgotForm";
import LoginForm from "../components/login/LoginForm";
import "../resources/css/login.css";

const Login = (props) => {
  const [isForgot, setisForgot] = useState(false);

  if (localStorage.getItem("token")) {
    props.history.push("/home");
  }

  const handelChange = () => {
    setisForgot(!isForgot);
  };

  return (
    <div className="login-page">
      <div className="login">
        <div className="login-container">
          {isForgot ? (
            <ForgotForm handelChange={handelChange} />
          ) : (
            <LoginForm handelChange={handelChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
