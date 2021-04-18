import React, { useEffect } from "react";
import ProfileComponent from "../components/profile/ProfileComponent";

const Profile = () => {
  useEffect(() => {
    let header = document.getElementById("header");
    header.style.visibility = "visible";
    var home = document.getElementById("home");
    var notice = document.getElementById("notice");
    var subject = document.getElementById("subject");
    var score = document.getElementById("score");
    var profile = document.getElementById("profile");
    home.classList.remove("header-active");
    subject.classList.remove("header-active");
    notice.classList.remove("header-active");
    score.classList.remove("header-active");
    profile.classList.add("header-active");
  }, []);
  return <ProfileComponent />;
};

export default Profile;
