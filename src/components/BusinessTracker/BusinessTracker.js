import React, {useState} from "react";
import RoundButton from "../RoundButton/RoundButton";
import Plus from "../../assets/icons/plus";
import Minus from "../../assets/icons/minus";
import OccupancyChart from "../OccupancyChart/OccupancyChart";
import "./BusinessTracker.css";

const BusinessTracker = () => {
  const [total, setTotal] = useState(0);

  const increment=(num)=> {
    setTotal(total+num)
  }

  const decrement=(num)=> {
    setTotal(total-num)
  }

  return (
    <div className="flex justify-center items-center flex-column outline mh7 mv3 bg-white-90">
      <section className="textview pa2 mr2 h4 center items-center b f-5 outline">
        {total}
      </section>
      <section className="center">
        <div className="ma2 flex flex-column">
          <RoundButton BtnSymbol={Plus} size={"small-button"} numVal={1} calcFunc={increment}/>
          <RoundButton BtnSymbol={Plus} btnText={"5"} size={"small-button"} numVal={5} calcFunc={increment}/>
          <RoundButton BtnSymbol={Plus} btnText={"10"} size={"small-button"} numVal={10} calcFunc={increment}/>
        </div>
        <div className="ma2 flex flex-column">
          <RoundButton BtnSymbol={Minus} size={"small-button"} numVal={1} calcFunc={decrement}/>
          <RoundButton BtnSymbol={Minus} btnText={"5"} size={"small-button"} numVal={5} calcFunc={decrement}/>
          <RoundButton BtnSymbol={Minus} btnText={"10"} size={"small-button"} numVal={10} calcFunc={decrement}/>
        </div>
      </section>
      <section className="center">
        <div className="tracker-total-container">
          <div className="tracker-total">
          <OccupancyChart total={total} />
          </div>
          <div className="tracker-total-text">
            <p>Current</p>
            <p>Occupancy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTracker;
