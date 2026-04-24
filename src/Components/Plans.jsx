import React from "react";
import "./Plans.css";

function Plans({ goToBooking }) {
  return (
    <section className="plans2" id="plans">

      <div className="plans2-header">
        <h2>
          Simple <span>Pricing</span>
        </h2>
        <p>Choose a plan that fits your workflow and scale your healthcare operations.</p>
      </div>

      <div className="plans2-grid">

        {/* BASIC */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">₹499 </span>

            <p className="title">Basic</p>
            <p className="info">Perfect for individuals getting started.</p>

            <ul className="features">
              <li><span className="icon">✓</span> 5 patients</li>
              <li><span className="icon">✓</span> Basic tracking</li>
              <li><span className="icon">✓</span> Email support</li>
            </ul>

            <div className="action">
              <button className="button" type="button" onClick={goToBooking}>Choose Plan</button>
            </div>
          </div>
        </div>

        {/* PRO (FEATURED) */}
        <div className="plan featured">
          <div className="inner">
            <span className="pricing">₹999 </span>

            <p className="title">Professional</p>
            <p className="info">Best for clinics and growing teams.</p>

            <ul className="features">
              <li><span className="icon">✓</span> 20 patients</li>
              <li><span className="icon">✓</span> Analytics tools</li>
              <li><span className="icon">✓</span> Priority support</li>
            </ul>

            <div className="action">
              <button className="button" type="button" onClick={goToBooking}>Choose Plan</button>
            </div>
          </div>
        </div>

        {/* ENTERPRISE */}
        <div className="plan">
          <div className="inner">
            <span className="pricing">₹1999 </span>

            <p className="title">Enterprise</p>
            <p className="info">Advanced features for large organizations.</p>

            <ul className="features">
              <li><span className="icon">✓</span> Unlimited patients</li>
              <li><span className="icon">✓</span> Full automation</li>
              <li><span className="icon">✓</span> Dedicated support</li>
            </ul>

            <div className="action">
              <button className="button" type="button" onClick={goToBooking}>Choose Plan</button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Plans;
