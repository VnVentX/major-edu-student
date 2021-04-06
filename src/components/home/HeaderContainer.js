import React, { useRef, useState, useEffect } from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { Header } = Layout;


const HeaderContainer = (props) => {
  const [open, setOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const node = useRef();

  useEffect(() => {
    console.log(props.history.location.pathname);
  }, [props.history.location.pathname]);

  return (
    <div className="scence">
      <Header>
          <div class="animatedtabs">
            <ul>
              <li className="">
                <Link to="/home" className="hover-zone"> 
                  <div className="menu-buttons acHome">
                    <h1></h1>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/notice" className="hover-zone">
                <div className="menu-buttons acNotice">
                  {/* <h1>Notice</h1> */}
                </div>
              </Link>
              </li>

              <li><Link to="/subject" className="hover-zone">
                <div className="menu-buttons acSubject">
                  {/* <h1>Subject</h1> */}
                </div>
              </Link>
              </li>

              <li><Link to="/score" className="hover-zone">
                <div className="menu-buttons acScore">
                <h1></h1>
                </div>
              </Link>
              </li>

              <li><Link to="/profile" className="hover-zone">
                <div className="menu-buttons acProfile">
                <h1></h1>
                </div>
              </Link>
              </li>

              <li><Link
                to=""
                className="hover-zone"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  props.history.push("/login");
                }}
              >
                <div className="menu-buttons acLogout">
                  <h1></h1>
                </div>
              </Link>
              </li>
            </ul>
          </div>
      </Header>
    </div>
  );
};

export default HeaderContainer;
