import React, {useEffect}from "react";
import ProfileComponent from "../components/profile/ProfileComponent";
import "../resources/css/profile.css";

import {  useLocation,} from "react-router-dom";

const Profile = (props) => {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      if (pathname === "/login" || pathname === "/") {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 140);
      }
    }, [pathname]);
    return props.children;
  }
  return <ProfileComponent history={props.history}/>;
};

export default Profile;
