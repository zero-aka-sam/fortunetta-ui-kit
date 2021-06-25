import React from "react";
import "./text.css";

export interface TextProps {
  variant: string;
  color?:string;
  fontSize?:string
  label: string;
}

export const Text: React.FC<TextProps> = ({
  variant,
  color,
  fontSize='14',
  label,
  ...props
}) => {

  return (
   <p className={variant==="primary"?`primary_styles`:`secondary_styles`} style={{color:color,fontSize:fontSize}}>
     {label}
   </p>
  );
};
