import React from "react";
import "./modals.css";
import paymentProcessing from '../../assets/icons/paymentProcessing.svg'
import paymentIncomplete from '../../assets/icons/paymentIncomplete.svg'
import paymentComplete from '../../assets/icons/paymentComplete.svg'
import processImg from '../../assets/icons/Gif.svg'
import check_green from '../../assets/icons/check_green.svg'
import errorImg from '../../assets/icons/error.svg'
import refresh from '../../assets/icons/refresh.svg'

export interface ModalsProps {
  title: string;
  variant:String,
  modalDesc: string;
  modalFooter: string;
  error: boolean
  onClick?: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  title,
  variant,
  modalDesc,
  modalFooter,
  error,
  
  ...props
}) => {

  const titleImg=variant==="incomplete"?paymentIncomplete:variant==="complete"?paymentComplete:paymentProcessing;
  const footerImg=variant==="incomplete"?errorImg:variant==="complete"?check_green:processImg;
  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <img className="modalImg" src={titleImg} alt="headImg" style={{width:26}} />
        <h1>{title}</h1>
      </div>
      <div className="modalBody">
        <p>{modalDesc}</p>
      </div>
      <div className="modalFooter">
        <img className="modalImg" src={footerImg} alt="footImg1" />
        {!error? <p>{modalFooter}</p> : <p style={{color:"#F65151"}}>{modalFooter}</p>}
      </div>
      {error&&<p className="retry_btn"><img src={refresh} alt="refresh" style={{width:20,marginRight:8}} /><span>Retry</span></p>}
    </div>
  );
};
