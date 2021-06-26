import React from "react";
// import "./text.css";

export interface TextProps {
  variant?: string;
  color?: string;
  fontSize?: string;
  label?: string;
  fontWeight?: number;
  lineHeight?: string;
}

export const Text: React.FC<TextProps> = ({
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
