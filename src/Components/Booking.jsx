import React, { useState } from "react";
import "./Booking.css";

function Booking({ goHome }) {

  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));



  return (
    <div className="booking">
        <button onClick={goHome}>← Back</button>
      {/* 🔹 STEPPER */}
      <div className="stepper">
        {["Patient Info", "Choose Doctor", "Pick Slot", "Confirm"].map((label, i) => (
          <div key={i} className={`step ${step === i + 1 ? "active" : ""}`}>
            <div className="circle2">{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* 🔹 FORM */}
      <div className="form-card">

        {step === 1 && (
          <div className="form-section">
            <h2>Personal Information</h2>

            <div className="grid">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Email" />
              <input placeholder="Phone Number" />
              <input placeholder="Date of Birth" />
              
              <select>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="consult-type">
              <button className="active">Online</button>
              <button>In-Person</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-section">
            <h2>Choose Doctor</h2>
            <p>Select a doctor (placeholder UI)</p>
          </div>
        )}

        {step === 3 && (
          <div className="form-section">
            <h2>Pick Slot</h2>
            <p>Select available time slots</p>
          </div>
        )}

        {step === 4 && (
          <div className="form-section">
            <h2>Confirm</h2>
            <p>Review and confirm appointment</p>
          </div>
        )}

        {/* 🔹 ACTIONS */}
        <div className="actions">
          {step > 1 && <button onClick={prev}>Back</button>}
          {step < 4 ? (
            <button className="primary" onClick={next}>Continue</button>
          ) : (
            <button className="primary">Submit</button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Booking;
