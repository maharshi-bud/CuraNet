import React, { useState, useEffect } from "react";
import "./Booking.css";
import Header from "./Hearder";
import Footer from "./Footer";

const plans = [
  {
    name: "Starter",
    price: "₹499/mo",
    desc: "Perfect for individual doctors starting out",
    features: [
      "Up to 50 patients/month",
      "Basic dashboard",
      "Appointment scheduling",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "₹999/mo",
    desc: "For growing clinics and active practices",
    features: [
      "Unlimited patients",
      "Advanced analytics",
      "Case management",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "₹1999/mo",
    desc: "For hospitals & multi-doctor teams",
    features: [
      "Multi-doctor access",
      "AI insights",
      "Custom integrations",
      "Dedicated support"
    ]
  }
];

function Booking({ goHome }) {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState(null);
  const [payment, setPayment] = useState("card");
  const [timer, setTimer] = useState(180);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (payment === "upi" && step === 3 && timer > 0) {
      const t = setInterval(() => setTimer((p) => p - 1), 1000);
      return () => clearInterval(t);
    }
  }, [payment, step, timer]);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <>
      <Header />

      {/* HERO */}
      <div className="booking-hero">
      <div className="booking-hero-content">
        <p className="back" onClick={goHome}>← Back to Home</p>
        <h1>Get Started with HOMEOSUITE</h1>
        <p>Set up your professional dashboard and manage patients seamlessly.</p>
      </div>
      </div>

<div className="stepper">
          {["Doctor Info", "Plan", "Payment", "Confirm"].map((l, i) => (
            <div key={i} className={`step ${step === i + 1 ? "active" : ""}`}>
              <div className="circle">{i + 1}</div>
              <span>{l}</span>
            </div>
          ))}
        </div>
      <div className="booking">

        {/* STEPPER */}
        

        <div className="form-card">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2>Doctor Information</h2>
              <p className="section-sub">
                Tell us about yourself to personalize your dashboard.
              </p>

              <div className="grid">
                <div className="field">
                  <label>Full Name *</label>
                  <input placeholder="Dr. John Doe" />
                </div>

                <div className="field">
                  <label>Email *</label>
                  <input placeholder="john@clinic.com" />
                </div>

                <div className="field">
                  <label>Phone *</label>
                  <input placeholder="+91 98765 43210" />
                </div>

                <div className="field">
                  <label>Clinic Name *</label>
                  <input placeholder="City Care Hospital" />
                </div>

                <div className="field">
                  <label>Specialization *</label>
                  <select>
                    <option>Select specialization</option>
                    <option>General Physician</option>
                    <option>Cardiologist</option>
                    <option>Dermatologist</option>
                  </select>
                </div>

                <div className="field">
                  <label>Experience</label>
                  <input placeholder="5 years" />
                </div>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2>Select a Plan</h2>
              <p className="section-sub">
                Choose the plan that fits your practice.
              </p>

              <div className="plans">
                {plans.map((p, i) => (
                  <div
                    key={i}
                    className={`plan-card ${plan === i ? "selected" : ""}`}
                    onClick={() => setPlan(i)}
                  >
                    <h3>{p.name}</h3>
                    <p className="price">{p.price}</p>
                    <p className="desc">{p.desc}</p>

                    <ul className="features">
                      {p.features.map((f, idx) => (
                        <li key={idx}>✔ {f}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2>Secure Payment</h2>

              <div className="payment-methods">
                <button
                  className={payment === "card" ? "active" : ""}
                  onClick={() => setPayment("card")}
                >
                  Card
                </button>

                <button
                  className={payment === "upi" ? "active" : ""}
                  onClick={() => {
                    setPayment("upi");
                    setTimer(180);
                  }}
                >
                  UPI
                </button>
              </div>

              {payment === "card" && (
                <div className="card-box">
                  <input placeholder="Card Number" />
                  <input placeholder="Expiry (MM/YY)" />
                  <input placeholder="CVV" />
                </div>
              )}

              {payment === "upi" && (
                <div className="upi-box">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi-${Math.random()}`}
                    alt="qr"
                  />

                  <p>Scan & Pay</p>

                  <div className="timer">
                    Expires in: {Math.floor(timer / 60)}:
                    {String(timer % 60).padStart(2, "0")}
                  </div>
                </div>
              )}
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="confirmation">
              <div className="check-circle">✔</div>

              <h2>Payment Successful</h2>
              <p>Your dashboard is now active.</p>

              <div className="bill">
                <p><strong>Plan:</strong> {plans[plan]?.name}</p>
                <p><strong>Amount:</strong> {plans[plan]?.price}</p>
              </div>

              <button className="primary" onClick={goHome}>
                Go to Dashboard
              </button>
            </div>
          )}

          {/* ACTIONS */}
          {step !== 4 && (
            <div className="actions">
              {step > 1 && <button className="back2" onClick={prev}>Back</button>}

              <button
                className="primary"
                onClick={() => {
                  if (step === 3) {
                    setProcessing(true);
                    setTimeout(() => {
                      setProcessing(false);
                      next();
                    }, 1500);
                  } else next();
                }}
              >
                {processing ? "Processing..." : step === 3 ? "Confirm Payment" : "Continue"}
              </button>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Booking;