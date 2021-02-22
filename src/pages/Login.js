import React, { useState } from "react";
import ForgotForm from "../components/login/ForgotForm";
import LoginForm from "../components/login/LoginForm";
import "../resources/css/login.css";

const Login = (props) => {
  const [isForgot, setisForgot] = useState(false);

  if (localStorage.getItem("token")) {
    props.history.push("/home");
  }

  const handleChange = () => {
    setisForgot(!isForgot);
  };

  return (
    <div className="login-page">
      <div className="login">
        <div className="login-container">
          {isForgot ? (
            <ForgotForm handleChange={handleChange} />
          ) : (
            <LoginForm handleChange={handleChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
