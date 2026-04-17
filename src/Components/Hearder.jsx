import React from "react";
import "./Header.css";
import { Stethoscope, User, Calendar } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        {/* 🔹 Logo */}
        <div className="logo">
          <Stethoscope size={22} className="logo-icon" />

          <span className="logo-text">
            HOME<span className="highlight">OSUITE</span>
          </span>
        </div>

        {/* 🔹 Nav */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Why Us</a>
          <a href="#">How It Works</a>
          <a href="#">Plans</a>
        </nav>

        {/* 🔹 Right Side */}
        <div className="header-right">

          <button className="btn">
            <Calendar size={16} />
            Book
          </button>

          <div className="account">
            {/* <HugeiconsIcon icon={Male02Icon} /> */}
            {/* <User size={25} /> */}
            <User size={25} strokeWidth={2} />
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;