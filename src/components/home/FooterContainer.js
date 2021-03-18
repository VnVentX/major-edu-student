import React from "react";
import { Layout, Space } from "antd";
import contact from "../../resources/img/home/contact.png";
import menu from "../../resources/img/home/menu.png";
import logo from "../../resources/img/logo_major.png";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const FooterContainer = () => {
  return (
    <Footer className="scence footer-bg">
      <div className="footer-content">
        <Space
          direction="horizontal"
          size={150}
          align="start"
          style={{ height: "90%" }}
        >
          <div className="contact footer-flex">
            <img src={contact} alt={contact} />
            <span style={{ marginTop: 20, color: "white", fontWeight: 500 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ullamcorper mi tellus, eu lacinia elit fermentum quis. Curabitur
              tempor mi nisi, non viverra nunc dictum ac. Nunc id dignissim
              purus, sed blandit quam. Duis sit amet condimentum augue, eget
              tempus magna. Nulla euismod mauris sit amet massa convallis
              blandit. Mauris lectus enim, aliquam at felis id, ultrices rhoncus
              diam. Quisque quis commodo ex, vitae ullamcorper est. Fusce
              vehicula tortor dolor, nec blandit arcu aliquam vel. Aenean justo
              nisi, convallis ut vestibulum eu, aliquam eu diam. Nulla hendrerit
              sodales commodo.
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
            <Link to="">
              <h1>Logout</h1>
            </Link>
          </div>
          <div className="footer-logo">
            <img src={logo} alt={logo} width={398} height={133} />
          </div>
        </Space>
      </div>
    </Footer>
  );
};

export default FooterContainer;
