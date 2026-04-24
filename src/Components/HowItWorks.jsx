import React, { useEffect } from "react";
import "./HowItWorks.css";
import { UserPlus, FileText, Activity, Sparkles } from "lucide-react";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";


function HowItWorks() {
  useEffect(() => {
    const sections = document.querySelectorAll(".timeline-section");
    const points = document.querySelectorAll(".timeline-point");
    const fill = document.getElementById("timelineFill");


    points.forEach((point) => {
  point.addEventListener("click", () => {
    const target = document.getElementById(point.dataset.target);
    target?.scrollIntoView({ behavior: "smooth" });
  });
});




    function updateTimeline() {
      const trigger = window.innerHeight * 0.4;
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= trigger) {
          activeIndex = index;
        }

        section.classList.toggle("active", index === activeIndex);
        points[index].classList.toggle("active", index === activeIndex);
      });

      const progress =
        (activeIndex / (sections.length - 1)) * 70;
      console.log(progress);
       const ph = progress/70 *100;
      fill.style.height = `${ph}%`;
    }

    window.addEventListener("scroll", updateTimeline);
    updateTimeline();

    return () => window.removeEventListener("scroll", updateTimeline);
  }, []);

return (

  <section className="how" id="how">

    {/* 🔹 HEADING */}
    <div className="how-header">
      <h2>
        How <span>Homeosuite</span> Works
      </h2>
      <p>
        A simple and structured approach to managing healthcare workflows,
        from onboarding to expert-level insights.
      </p>
    </div>

    {/* 🔹 TIMELINE */}
    <div className="timeline-layout">

      {/* LEFT TRACK */}
      <aside className="timeline">
        <div className="timeline-track">
          <div className="timeline-fill" id="timelineFill"></div>
        </div>

        <div className="timeline-points">
          <button className="timeline-point active"></button>
          <button className="timeline-point"></button>
          <button className="timeline-point"></button>
          <button className="timeline-point"></button>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="timeline-content">

        {/* STEP 1 */}
        <section className="timeline-section active">
          <div className="timeline-grid">
            <div className="text">
              <span className="label">STEP 1</span>
              <h2><UserPlus size={22}/> Register</h2>
              <p>
                Create your account and access a seamless healthcare platform
                designed for efficiency and ease of use.
              </p>
            </div>
            <div className="image">
              <img src={img2} alt="" />
            </div>
          </div>
        </section>

        {/* STEP 2 */}
        <section className="timeline-section">
          <div className="timeline-grid">
            <div className="text">
              <span className="label">STEP 2</span>
              <h2><FileText size={22}/> Add Case</h2>
              <p>
                Upload patient records, manage cases, and organize workflows effortlessly.
              </p>
            </div>
            <div className="image">
              <img src={img3} alt="" />
            </div>
          </div>
        </section>

        {/* STEP 3 */}
        <section className="timeline-section">
          <div className="timeline-grid">
            <div className="text">
              <span className="label">STEP 3</span>
              <h2><Activity size={22}/> Analyze</h2>
              <p>
                Gain insights through smart tools that improve decisions and tracking.
              </p>
            </div>
            <div className="image">
              <img src={img4} alt="" />
            </div>
          </div>
        </section>

        {/* STEP 4 */}
        <section className="timeline-section">
          <div className="timeline-grid">
            <div className="text">
              <span className="label">STEP 4</span>
              <h2><Sparkles size={22}/> Expert Solutions</h2>
              <p>
                Receive intelligent recommendations and expert-backed insights
                to enhance patient outcomes.
              </p>
            </div>
            <div className="image">
              <img src={img5} alt="" />
            </div>
          </div>
        </section>

      </main>

    </div>

  </section>
);
}

export default HowItWorks;