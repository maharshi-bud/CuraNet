import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      
      <div className="header-container">

        {/* 🔹 Logo + Pill */}
        {/* <div className="logo"> */}
<div className="logo">
  <span className="logo-text">
    Cura<span className="highlight">Net</span>
  </span>

  <div className="pill-icon">
    <div className="pill">
      <div className="medicine">
        {[...Array(20)].map((_, i) => <i key={i}></i>)}
      </div>
      <div className="side"></div>
      <div className="side"></div>
    </div>
  </div>
</div>

        {/* 🔹 Nav */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Why Us</a>
          <a href="#">How It Works</a>
          <a href="#">Plans</a>
        </nav>

        {/* 🔹 CTA */}
        <button className="btn">Book Now</button>

      </div>
    </header>
  );
}

export default Header;