import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";

const CheckForm = (props) => {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [isWrongInfo, setisWrongInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInfo();
  };

  const checkInfo = async () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("contact", contact);
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/checkContact`, formData)
      .then((res) => {
        console.log(res.data);
        props.handleIsChangePass(username);
      })
      .catch((e) => {
        console.log(e);
        setisWrongInfo(true);
      });
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
            placeholder="Contact"
            autoComplete="off"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <label htmlFor="parentPhone">Contact</label>
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
