import React from "react";
import "./HowItWorks.css";
import { UserPlus, FileText, Activity, CheckCircle } from "lucide-react";

function HowItWorks() {
  return (
    <section className="timeline">

      <h2 className="timeline-title">
        How It <span>Works</span>
      </h2>

      <div className="timeline-container">

        <div className="timeline-item left">
          <div className="content">
            <UserPlus size={24} />
            <h3>Register</h3>
            <p>Create your account and get started in seconds.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <FileText size={24} />
            <h3>Add Case</h3>
            <p>Upload patient details or medical records easily.</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <Activity size={24} />
            <h3>Analyze</h3>
            <p>Get insights and track progress efficiently.</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <CheckCircle size={24} />
            <h3>Improve Care</h3>
            <p>Deliver better healthcare outcomes seamlessly.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;