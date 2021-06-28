import React from "react";
import "./link.css";

export const Link = ({
  backgroundColor,
  label,
  img,
  ...props
}) => {
  return (
    <div className="nav-bar-links">
      <img src={img} alt="roulette" /> {label}
    </div>
  );
};
