import React from "react";
import { Layout, Menu } from "antd";
import logo_major from "../../resources/img/logo_major.svg";
import ProfileMenu from "./ProfileMenu";
const { Header } = Layout;

const HeaderContainer = () => {
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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <ProfileMenu />
      </div>
    </Header>
  );
};

export default HeaderContainer;
