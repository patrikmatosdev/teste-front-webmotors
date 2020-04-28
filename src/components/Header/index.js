import React from "react";
import "./styles.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div className="container">
      <div className="container-logo">
        <img src={logo} className="logo" />
      </div>
    </div>
  );
};

export default Header;
