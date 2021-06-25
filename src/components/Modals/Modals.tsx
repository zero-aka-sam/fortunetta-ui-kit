import React from "react";
import "./modals.css";

export interface ModalsProps {
  modalHead: string;
  modalDesc: string;
  modalFoot1: string;
  headImg: string;
  footImg1: string;
  error: boolean
  onClick?: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  modalHead,
  headImg,
  modalDesc,
  modalFoot1,
  footImg1,
  error,
  
  ...props
}) => {
  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <img className="modalImg" src={headImg} alt="headImg" />
        <h1>{modalHead}</h1>
      </div>
      <div className="modalBody">
        <p>{modalDesc}</p>
      </div>
      <div className="modalFooter">
        <img className="modalImg" src={footImg1} alt="footImg1" />
        {!error? <p>{modalFoot1}</p> : <p style={{color:"#F65151"}}>{modalFoot1}</p>}
      </div>
    </div>
  );
};
