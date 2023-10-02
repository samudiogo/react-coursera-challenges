import React from "react";
import logoImg from "../../assets/react.svg";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-container">
        <img src={logoImg} alt="logo" className="logo" />
        <span>ReactFacts</span>
      </div>
      <h1>React - Course - Project 1</h1>
    </nav>
  );
};
