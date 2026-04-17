import React from "react";

const Card2 = ({ name, role, text }) => {
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

export default Card2;