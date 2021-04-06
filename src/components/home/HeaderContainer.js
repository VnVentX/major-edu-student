import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderContainer = (props) => {
  useEffect(() => {
    console.log(props.history.location.pathname);
  }, [props.history.location.pathname]);

  return (
    <div className="scence">
      <div id="header" class="animatedtabs">
        <ul>
          <li>
            <Link to="/home" className="hover-zone">
              <div className="menu-buttons acHome" />
            </Link>
          </li>
          <li>
            <Link to="/notice" className="hover-zone">
              <div className="menu-buttons acNotice" />
            </Link>
          </li>

          <li>
            <Link to="/subject" className="hover-zone">
              <div className="menu-buttons acSubject" />
            </Link>
          </li>
          <li>
            <Link to="/score" className="hover-zone">
              <div className="menu-buttons acScore" />
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover-zone">
              <div className="menu-buttons acProfile" />
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="hover-zone"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                props.history.push("/login");
              }}
            >
              <div className="menu-buttons acLogout" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderContainer;
