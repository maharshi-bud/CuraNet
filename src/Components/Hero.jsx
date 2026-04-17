import React from "react";
import "./Hero.css";
import img1 from "./img/img1.png"; // 1. Uncomment the import statement

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* 🔷 LEFT VISUAL */}
        <div className="hero-visual">

          <div className="triangle"></div>

          <div className="circle">
            {/* 2. Fix 'srci' typo and use the imported variable instead of a string */}
            <img
              src={img1} 
              alt="doctor"
            />
          </div>

        </div>

        {/* 🔷 RIGHT CONTENT */}
        <div className="hero-content">
          
          <h1>
            Redefining <span>Healthcare Experience</span>
          </h1>
          
          <div className="para">
          <p>
            HOMEOSUITE brings together modern technology and healthcare,
            creating a seamless bridge between patients and professionals.
            Built for simplicity, designed for impact.
          </p>
          </div>

          <button class="button">Read More</button>

        
        </div>

      </div>

    </section>
  );
}

export default Hero;