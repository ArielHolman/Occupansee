import React from "react";
import "./RoundButton.css";

const RoundButton = ({ btnText, size, BtnSymbol, numVal, calcFunc }) => {
  const btnVal = btnText ? btnText : "";

 

  return (
    <div className="round-button-container dim">
      <button className={size} onClick={()=>{calcFunc(numVal)}}>
        <BtnSymbol />
        {btnVal}
      </button>
    </div>
  );
};

export default RoundButton;
