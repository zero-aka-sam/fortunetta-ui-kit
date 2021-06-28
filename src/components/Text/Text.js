import React from "react";
import "./text.css";


export const Text = ({
  variant,
  color = "#FFFFFF",
  fontSize = "14px",
  lineHeight = "18px",
  fontWeight = 400,
  label,
  ...props
}) => {
  return ( 
    <div style={{ background: "black" }}>
      <p style={{ color: color, fontSize: fontSize, lineHeight: lineHeight, fontWeight:fontWeight }}>
        {label}
      </p>
    </div>
  );
};
