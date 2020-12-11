import React, { useState } from "react";
import RoundButton from "../RoundButton/RoundButton";
import Plus from "../../assets/icons/plus";
import Minus from "../../assets/icons/minus";
import OccupancyChart from "../OccupancyChart/OccupancyChart";
import "./BusinessTracker.css";

const BusinessTracker = () => {
  const [total, setTotal] = useState(11);

  const increment = (num) => {
    setTotal(total + num);
  };

  const decrement = (num) => {
    setTotal(total - num);
  };

  const maxOccupancy = 45;
  const percent = (total / maxOccupancy) * 100;
  const percentValue = percent.toFixed(0);

  return (
    <div className="biz-tracker flex justify-center items-center flex-column mh7 mv2 bg-white-90" style={{marginLeft:460}}>
      <section className="textview pa1 mr2 h3 center items-center b outline">
        {total}
      </section>
      <section className="center">
        <div className="ma1 flex flex-column">
          <RoundButton
            BtnSymbol={Plus}
            size={"small-button"}
            numVal={1}
            calcFunc={increment}
          />
          <RoundButton
            BtnSymbol={Plus}
            btnText={"5"}
            size={"small-button"}
            numVal={5}
            calcFunc={increment}
          />
          <RoundButton
            BtnSymbol={Plus}
            btnText={"10"}
            size={"small-button"}
            numVal={10}
            calcFunc={increment}
          />
        </div>
        <div className="ma1 flex flex-column">
          <RoundButton
            BtnSymbol={Minus}
            size={"small-button"}
            numVal={1}
            calcFunc={decrement}
          />
          <RoundButton
            BtnSymbol={Minus}
            btnText={"5"}
            size={"small-button"}
            numVal={5}
            calcFunc={decrement}
          />
          <RoundButton
            BtnSymbol={Minus}
            btnText={"10"}
            size={"small-button"}
            numVal={10}
            calcFunc={decrement}
          />
        </div>
      </section>
      <section className="center">
        <div className="tracker-total-container">
          <div className="tracker-total">
            {/* <OccupancyChart total={total} /> */}
            <h1 className="tracker-percentage">{percentValue}%</h1>
          </div>
          <div className="tracker-total-text">
            <p className="tracker-text">Current <br/> Occupancy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTracker;
