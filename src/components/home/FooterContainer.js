import React from "react";
import { Layout } from "antd";
import contact from "../../resources/img/home/contact.png";
import menu from "../../resources/img/home/menu.png";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterContainer = (props) => {
  return (
    <Footer className="scence footer-bg">
      <div className="footer-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <div className="contact footer-flex">
            <img src={contact} alt={contact} />
            <span style={{ marginTop: 20, color: "white", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ullamcorper mi tellus, eu lacinia elit fermentum quis. Curabitur
              tempor mi nisi, non viverra nunc dictum ac. Nunc id dignissim
              purus, sed blandit quam. Duis sit amet condimentum augue, eget
              tempus magna. Nulla euismod mauris sit amet massa convallis
              blandit. Mauris lectus enim,
            </span>
          </div>
          <div className="footer-menu">
            <img src={menu} alt={menu} />
            <Link to="/notice">
              <h1>Notice</h1>
            </Link>
            <Link to="/subject">
              <h1>Subject</h1>
            </Link>
            <Link to="/score">
              <h1>Score</h1>
            </Link>
            <Link to="/profile">
              <h1>Profile</h1>
            </Link>
          </div>
          <div className="reset-pass">
            <Link to="">
              <h1>Reset password</h1>
            </Link>
            <Link
              to=""
              className="hover-zone"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                props.history.push("/login");
              }}
            >
              <h1>Logout</h1>
            </Link>
          </div>
          <div className="footer_logo">
            <div className="logo-footer" />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterContainer;
