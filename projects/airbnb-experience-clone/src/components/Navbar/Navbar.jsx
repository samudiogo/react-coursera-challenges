import React from "react";
import logo from "../../assets/airbnb-logo.svg";

export const Navbar = () => {
  return (
    <header className="navbar--header">
      <div className="navbar--brand-logo">
        <img src={logo} alt="" />
      </div>
      <nav></nav>
    </header>
  );
};
