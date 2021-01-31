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
        //isChangePass = true thì chuyển sang change pass
        <ChangePassForm handelChange={props.handelChange} />
      ) : (
        //isChangePass = false thì tiếp tục check
        <CheckForm
          handelChange={props.handelChange}
          handelIsChangePass={handelIsChangePass}
        />
      )}
    </>
  );
};

export default ForgotForm;
