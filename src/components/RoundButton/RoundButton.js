import React from "react";
import "./RoundButton.css";

const RoundButton = ({ btnText, size, BtnSymbol }) => {
  const btnVal = btnText ? btnText : "";
  return (
    <div className="round-button-container dim">
      <button className={size}>
        <BtnSymbol />
        {btnVal}
      </button>
    </div>
  );
};

export default RoundButton;
