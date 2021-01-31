import React, { useState } from "react";
import ChangePassForm from "./ChangePassForm";
import CheckForm from "./CheckForm";

const ForgotForm = (props) => {
  const [isChangePass, setIsChangePass] = useState(false);

  const handelIsChangePass = () => {
    setIsChangePass(!isChangePass);
  };

  return (
    <>
      {isChangePass ? (
        <ChangePassForm handelChange={props.handelChange} />
      ) : (
        <CheckForm
          handelChange={props.handelChange}
          handelIsChangePass={handelIsChangePass}
        />
      )}
    </>
  );
};

export default ForgotForm;
