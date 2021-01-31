import React, { useState } from "react";
import submit_button from "../../resources/img/submit-button.png";
import { Button } from "antd";

const CheckForm = (props) => {
  const [username, setUsername] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (username === "test" && parentPhone === "123") {
      props.handelIsChangePass();
    }
    console.log(username, parentPhone);
  };

  return (
    <>
      <h2 style={{ textAlign: "center", paddingBottom: 30 }}>
        Please give us some information to reset your password <br />
        Thank you!
      </h2>
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
            type="text"
            name="parentPhone"
            id="parentPhone"
            required="required"
            placeholder="Parent's Phone Number"
            autoComplete="off"
            onChange={(e) => {
              setParentPhone(e.target.value);
            }}
          />
          <label htmlFor="parentPhone">Parent's Phone Number</label>
        </div>
        <Button
          type="link"
          block
          onClick={props.handelChange}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          &lt; Back to login
        </Button>
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

export default CheckForm;
