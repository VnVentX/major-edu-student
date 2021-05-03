import React, { useState } from "react";
import ChangePassForm from "./ChangePassForm";
import CheckForm from "./CheckForm";

const ForgotForm = (props) => {
  const [isChangePass, setIsChangePass] = useState(false);
  const [username, setUsername] = useState("");

  const handleIsChangePass = (value) => {
    setUsername(value);
    setIsChangePass(!isChangePass);
  };

  return (
    <>
      {isChangePass ? (
        //isChangePass = true thì chuyển sang change pass
        <ChangePassForm handleChange={props.handleChange} username={username} />
      ) : (
        //isChangePass = false thì tiếp tục check
        <CheckForm
          handleChange={props.handleChange}
          handleIsChangePass={handleIsChangePass}
        />
      )}
    </>
  );
};

export default ForgotForm;
