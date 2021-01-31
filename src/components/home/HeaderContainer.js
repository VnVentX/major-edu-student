import React from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";
import logo_major from "../../resources/img/logo_major.png";
const { Header } = Layout;

const HeaderContainer = (props) => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        minHeight: "auto",
      }}
    >
      <div className="header-menu">
        <div className="logo">
          <img src={logo_major} alt={logo_major} />
        </div>
        <div className="menu-content">
          <Space size={45}>
            <Link to="/home">
              <div className="home-btn" />
            </Link>
            <Link to="/notice">
              <div className="notice-btn" />
            </Link>
            <Link to="/subject">
              <div className="subject-btn" />
            </Link>
            <Link to="/score">
              <div className="score-btn" />
            </Link>
            <Link to="/profile">
              <div className="profile-btn" />
            </Link>
          </Space>
        </div>
        <Link
          to=""
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
        >
          <div className="logout-btn"></div>
        </Link>
      </div>
    </Header>
  );
};

export default HeaderContainer;
