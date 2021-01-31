import React, { useState } from "react";
import submit_button from "../../resources/img/submit-button.png";

const ChangePassForm = (props) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (password === newPassword) {
      props.handelChange();
    } else {
      alert("Password is not match!");
    }
    console.log(password, newPassword);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", paddingBottom: 30 }}>
        Please enter your new password <br />
        Thank you!
      </h2>
      <form className="login-form">
        <div className="input-group">
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            required="required"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
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
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <label htmlFor="confirm">Re-enter your password</label>
        </div>

        <input
          type="image"
          src={submit_button}
          alt={submit_button}
          style={{ width: 183 }}
          onClick={handelSubmit}
        />
      </form>
    </>
  );
};

export default ChangePassForm;
