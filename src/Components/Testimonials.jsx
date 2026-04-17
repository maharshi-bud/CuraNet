import React from "react";
import Card from "./Card";
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
const Card = ({ name, role, text }) => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="avatar">
          {name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="name">{name}</div>
          <div className="role">{role}</div>
        </div>
      </div>

      <div className="stars">★★★★★</div>

      <p className="text">{text}</p>

      <div className="read">Read more</div>
    </div>
  );
};

function Testimonials() {
  return (
    <section className="testimonials">

      <h2 className="test-title">
        What Our <span>Users Say</span>
      </h2>

      <div className="carousel">

        <div className="carousel-track">
          {[...reviews, ...reviews].map((review, index) => (
            <Card key={index} {...review} />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Testimonials;