import React from "react";
import "./text.css";

export interface TextProps {
  type: string;
  number: string;
  label: string;
  onClick?: () => void;
}

export const Text: React.FC<TextProps> = ({
  type,
  number,
  label,
  ...props
}) => {
  return (
    <div style={{background:"#141729", width:"200px",paddingTop:"1px", textAlign:"center", textTransform:"capitalize"}}>
      <p className={`text-regular-${type}-${number}`}>{label}</p>
    </div>
  );
};
