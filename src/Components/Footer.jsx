import React from "react";
import "./Footer.css";
// import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

function Footer({ goToBooking }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 🔹 BRAND */}
        <div className="footer-col brand">
          <h2>HOMEOSUITE</h2>
          <p>
            Redefining healthcare through technology. Bridging the gap between
            patients and professionals seamlessly.
          </p>

<div className="socials">
  <a href="#">X</a>
  <a href="#">in</a>
  <a href="#">IG</a>
  <a href="#">f</a>
</div>

          {/* <div className="socials">
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Facebook size={18} /></a>
          </div> */}
        </div>

        {/* 🔹 QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Pricing Plans</a></li>
            <li><a href="#" onClick={(event) => { event.preventDefault(); goToBooking(); }}>Book Appointment</a></li>
            <li><a href="#">Why Choose Us</a></li>
          </ul>
        </div>

        {/* 🔹 SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Online Consultation</a></li>
            <li><a href="#">Case Management</a></li>
            <li><a href="#">Patient Analytics</a></li>
            <li><a href="#">Expert Insights</a></li>
            <li><a href="#">Health Tracking</a></li>
            <li><a href="#">Clinic Dashboard</a></li>
          </ul>
        </div>

        {/* 🔹 CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact">
            <li><a href="mailto:hello@homeosuite.com">hello@homeosuite.com</a></li>
            <li><a href="tel:+18001234567">+1 (800) 123-4567</a></li>
            <li>123 Health Ave, Med City, CA 94102</li>
          </ul>

          <button className="contact-btn" type="button" onClick={goToBooking}>Book Appointment</button>
        </div>

      </div>

      {/* 🔹 BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 HOMEOSUITE. All rights reserved.</p>

        <div className="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
