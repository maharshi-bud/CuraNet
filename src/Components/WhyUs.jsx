import React from "react";
import "./WhyUs.css";
import { ShieldCheck, Clock, Users, Sparkles } from "lucide-react";

function WhyUs() {
  return (
    <section className="why">

      <h2 className="why-title">
        Why Choose <span>HOMEOSUITE</span>
      </h2>

      <div className="why-grid">

        <div className="why-card">
          <ShieldCheck size={28} />
          <h3>Trusted Care</h3>
          <p>Verified professionals ensuring safe and reliable healthcare support.</p>
        </div>

        <div className="why-card">
          <Clock size={28} />
          <h3>Quick Access</h3>
          <p>Book consultations and manage cases without delays.</p>
        </div>

        <div className="why-card">
          <Users size={28} />
          <h3>Patient First</h3>
          <p>Designed around patient needs for a seamless experience.</p>
        </div>

        <div className="why-card">
          <Sparkles size={28} />
          <h3>Smart Platform</h3>
          <p>Modern tools powered by technology to simplify healthcare workflows.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyUs;