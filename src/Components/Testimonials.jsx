import React from "react";
import Card2 from "./Card"; // make sure this path is correct
import "./testimonials.css";

const reviews = [
  { name: "Donald Jackman", role: "Content Creator", text: "Great platform, super easy to use." },
  { name: "Sarah Lee", role: "Doctor", text: "Helps manage patient data effortlessly." },
  { name: "Amit Shah", role: "Patient", text: "Booking appointments is seamless now." },
  { name: "Riya Patel", role: "Nurse", text: "Clean interface and very efficient." },
  { name: "John Smith", role: "Admin", text: "Organizing cases has never been easier." },
  { name: "Emma Watson", role: "Therapist", text: "Improves workflow significantly." },
  { name: "David Kim", role: "Doctor", text: "Accurate and reliable insights." },
  { name: "Ananya Gupta", role: "Patient", text: "Very smooth experience." },
  { name: "Chris Evans", role: "Specialist", text: "Saves a lot of time." },
  { name: "Neha Verma", role: "Doctor", text: "Highly recommended for clinics." },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <h2 className="test-title">
        What Our <span>Users Say</span>
      </h2>

      <div className="carousel">
        <div className="carousel-track">
          {[...reviews, ...reviews].map((review, index) => (
            <Card2
              key={index}
              name={review.name}
              role={review.role}
              text={review.text}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

export default Testimonials;