import React from "react";
import "./WhyUs.css";
import { ShieldCheck, Clock, Users, Sparkles } from "lucide-react";

function WhyUs() {
  return (
    <section className="why">

      <h2 className="why-title">
        Why Choose <span>Homeosuite</span>
      </h2>

      <div className="why-grid">

 <div className="why-card">
  <ShieldCheck size={28} />
  <h3>Trusted Care</h3>
  <p>
    All healthcare professionals on Homeosuite are carefully verified to ensure
    safety, credibility, and high-quality patient care. We prioritize trust so
    you can focus on better outcomes without worry.
  </p>
</div>

<div className="why-card">
  <Clock size={28} />
  <h3>Quick Access</h3>
  <p>
    Instantly book consultations, access records, and manage cases in real time.
    Our platform eliminates delays and keeps your workflow smooth and efficient.
  </p>
</div>

<div className="why-card">
  <Users size={28} />
  <h3>Patient First</h3>
  <p>
    Designed with a patient-centric approach, Homeosuite ensures seamless
    communication, easy tracking, and a personalized healthcare experience at
    every step.
  </p>
</div>

<div className="why-card">
  <Sparkles size={28} />
  <h3>Smart Platform</h3>
  <p>
    Powered by modern technology and intelligent tools, Homeosuite simplifies
    complex healthcare workflows, helping professionals make faster and smarter
    decisions.
  </p>
</div>

      </div>

    </section>
  );
}

export default WhyUs;