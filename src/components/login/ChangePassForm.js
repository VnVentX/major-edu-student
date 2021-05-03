import React, { useState } from "react";
import axios from "axios";

const ChangePassForm = (props) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isWrongInfo, setisWrongInfo] = useState(false);
  const [isLengthError, setIsLengthError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setIsLengthError(true);
    } else {
      if (password === newPassword) {
        let formData = new FormData();
        formData.append("newPassword", password);
        formData.append("username", props.username);
        await axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/checkPassword/username`,
            formData
          )
          .then((res) => {
            console.log(res.data);
            props.handleChange();
          })
          .catch((e) => {
            console.log(e);
            setisWrongInfo(true);
          });
      } else {
        setisWrongInfo(true);
      }
    }
  };

  return (
    <>
      {isWrongInfo && (
        <div className="wrong-notice change">
          <div className="login-ok-btn" onClick={() => setisWrongInfo(false)}>
            <h2>OK</h2>
          </div>
        </div>
      )}
      {isLengthError && (
        <div className="wrong-notice length-error">
          <div className="login-ok-btn" onClick={() => setIsLengthError(false)}>
            <h2>OK</h2>
          </div>
        </div>
      )}
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
          <label htmlFor="confirm">Re-enter password</label>
        </div>
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

export default ChangePassForm;
