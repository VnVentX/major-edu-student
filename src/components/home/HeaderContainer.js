import React from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo_major from "../../resources/img/logo_major.png";
const { Header } = Layout;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateY(-120%)")};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  @media (max-width: 1000px) {
    width: 100%;
    height: 1000%;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 1000%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open, setOpen, history }) => {
  return (
    <StyledMenu open={open}>
      <Space direction="vertical" align="center" size={45}>
        <Link to="/home" onClick={() => setOpen(!open)}>
          Home
        </Link>
        <Link to="/notice" onClick={() => setOpen(!open)}>
          Notice
        </Link>
        <Link to="/subject" onClick={() => setOpen(!open)}>
          Subject
        </Link>
        <Link to="/score" onClick={() => setOpen(!open)}>
          Score
        </Link>
        <Link to="/profile" onClick={() => setOpen(!open)}>
          Profile
        </Link>
        <Link
          to=""
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            history.push("/login");
          }}
        >
          Logout
        </Link>
      </Space>
    </StyledMenu>
  );
};

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 50px;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      style={{ position: "relative", top: 0, left: 0 }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const HeaderContainer = (props) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <div className="scence">
      <Header>
        <div className="header-menu">
          <div className="logo">
            <img src={logo_major} alt={logo_major} />
          </div>
          <div className="menu-content">
            <Space size={45}>
              <Link to="/home">
                <div className="menu-btn home-btn" />
              </Link>
              <Link to="/notice">
                <div className="menu-btn notice-btn" />
              </Link>
              <Link to="/subject">
                <div className="menu-btn subject-btn" />
              </Link>
              <Link to="/score">
                <div className="menu-btn score-btn" />
              </Link>
              <Link to="/profile">
                <div className="menu-btn profile-btn" />
              </Link>
            </Space>
          </div>
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              props.history.push("/login");
            }}
          >
            <div className="logout-btn"></div>
          </Link>
          {/* Menu Hamburger */}
          <div className="menu-ham">
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} history={props.history} />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default HeaderContainer;
