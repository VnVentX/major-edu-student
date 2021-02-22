import React, { useState } from "react";
import submit_button from "../../resources/img/login-page/submit-btn.png";

const ChangePassForm = (props) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isWrongInfo, setisWrongInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === newPassword) {
      //logic api đổi pass ở đây
      //đổi status thành isForgot = false, chuyển sang login
      props.handleChange();
    } else {
      setisWrongInfo(true);
    }
    console.log(password, newPassword);
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
          <img src={submit_button} alt={submit_button} width="80%" />
        </button>
      </form>
    </>
  );
};

export default ChangePassForm;
