import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import Plus from "../../assets/icons/plus";
import Minus from "../../assets/icons/minus";
import TextBox from "../TextBox/TextBox";
import OccupancyChart from "../OccupancyChart/OccupancyChart";
import "./BusinessTracker.css";

const BusinessTracker = () => {
  return (
    <div className="flex justify-center items-center flex-column outline mh7 mv3 bg-white-90">
      <section className="flex justify-center items-center">
        <TextBox />
        <TextBox />
        <TextBox />
        <TextBox />
        <TextBox />
        <TextBox />
      </section>
      <section className=" w-25 pa2 mr2 h4 center items-center b f1-l">
        +3
      </section>
      <section className="center">
        <div className="ma2 flex flex-column">
          <RoundButton BtnSymbol={Plus} size={"large-button"} />
          <RoundButton BtnSymbol={Plus} btnText={"5"} size={"small-button"} />
          <RoundButton BtnSymbol={Plus} btnText={"10"} size={"small-button"} />
        </div>
        <div className="ma2 flex flex-column">
          <RoundButton BtnSymbol={Minus} size={"large-button"} />
          <RoundButton BtnSymbol={Minus} btnText={"5"} size={"small-button"} />
          <RoundButton BtnSymbol={Minus} btnText={"10"} size={"small-button"} />
        </div>
      </section>
      <section className="center">
        <div className="ma2 flex flex-row items-center">
          <div className="tracker-chart-container">
            <OccupancyChart className="tracker-chart" />
          </div>
          <div>
            <p className="f2 center">Current</p>
            <p className="f2 center"> Total</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTracker;
