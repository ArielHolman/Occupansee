import React from "react";

const DashboardButton = ({buttonInfo, handler}) => {
  const {imgLink, imgTitle, buttonName } = buttonInfo
  return (
    <button
      className="center bg-white pa1-ns mv2 ba b--black-10 grow pointer shadow-3"
      style={{ width: 200 , legnth: 100, marginLeft:100, marginRight:100}}
    >
      <div className="tc">
        <img
        alt="business logo"
          src={imgLink}
          className="br-80 h3 w3 ba b--black-05 pa1 m3"
          title={imgTitle}
        />
        <h1 className="f7">{buttonName}</h1>
      </div>
    </button>
  );
};

export default DashboardButton;
