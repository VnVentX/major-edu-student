import React, { useState } from "react";
import { Button } from "antd";

const CheckForm = (props) => {
  const [username, setUsername] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [isWrongInfo, setisWrongInfo] = useState(false);

  const handleSubmit = (e) => {
    if (username !== "test" || parentPhone !== "123") {
      setisWrongInfo(true);
    } else if (username === "test" && parentPhone === "123") {
      props.handleIsChangePass();
    }
    e.preventDefault();
    console.log(username, parentPhone);
  };

  return (
    <>
      {isWrongInfo && (
        <div className="wrong-notice check">
          <div className="check-ok-btn" onClick={() => setisWrongInfo(false)}>
            <h2>OK</h2>
          </div>
        </div>
      )}
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
          <label htmlFor="parentPhone">Parent's Phone</label>
        </div>
        <Button
          className="check-action-btn"
          type="link"
          block
          onClick={props.handleChange}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          &lt; Back to login
        </Button>
        <button
          type="submit"
          style={{
            border: 0,
            background: "transparent",
            cursor: "pointer",
            marginTop: 20,
          }}
          onClick={handleSubmit}
        >
          <div className="progress-test-btn">
            <div className="oval-button" />
            <h1>Submit</h1>
          </div>
        </button>
      </form>
    </>
  );
};

export default CheckForm;
