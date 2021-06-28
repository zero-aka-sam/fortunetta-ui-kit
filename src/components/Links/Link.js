import React from "react";
import "./link.css";

const Link = ({ backgroundColor, label, img, ...props }) => {
  return (
    <div className="nav-bar-links">
      <img src={img} alt="roulette" /> {label}
    </div>
  );
};

export default Link;
