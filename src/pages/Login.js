import React, { useState } from "react";
import ForgotForm from "../components/login/ForgotForm";
import LoginForm from "../components/login/LoginForm";
import "../resources/css/login.css";

const Login = () => {
  const [isForgot, setisForgot] = useState(false);

  const handelChange = () => {
    setisForgot(!isForgot);
  };

  return (
    <div className="login">
      <div className="container">
        {isForgot ? (
          <ForgotForm handelChange={handelChange} />
        ) : (
          <LoginForm handelChange={handelChange} />
        )}
      </div>
    </div>
  );
};

export default Login;
