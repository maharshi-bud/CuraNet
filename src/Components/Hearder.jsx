import React from "react";
import "./Header.css";
import { Stethoscope, User, Calendar } from "lucide-react";

function Header({ goToBooking , goHome }) {
  return (
    <header className="header">

      <div className="header-container">

        {/* 🔹 Logo */}
        <div className="logo"  onClick={goHome}>
          <Stethoscope size={22} className="logo-icon" color="#1f8a78" />
        
          <span className="logo-text">
            HOME<span className="highlight">OSUITE</span>
          </span>
        </div>

        {/* 🔹 Nav */}
       <nav className="nav">

  <a
    href="#home"
    onClick={(e) => {
      e.preventDefault();
      goHome();
      setTimeout(() => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }}
  >
    Home
  </a>

  <a
    href="#why"
    onClick={(e) => {
      e.preventDefault();
      goHome();
      setTimeout(() => {
        document.getElementById("why")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }}
  >
    Why Us
  </a>

  <a
    href="#how"
    onClick={(e) => {
      e.preventDefault();
      goHome();
      setTimeout(() => {
        document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }}
  >
    How It Works
  </a>

  <a
    href="#plans"
    onClick={(e) => {
      e.preventDefault();
      goHome();
      setTimeout(() => {
        document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }}
  >
    Plans
  </a>

</nav>

        {/* 🔹 Right Side */}
        <div className="header-right">

          <button className="btn" type="button" onClick={goToBooking}>
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
