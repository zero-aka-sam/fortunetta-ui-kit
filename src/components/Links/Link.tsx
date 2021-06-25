import React from "react";
import "./link.css";

export interface LinkProps {
  backgroundColor?: string;
  label: string;
  img: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
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
