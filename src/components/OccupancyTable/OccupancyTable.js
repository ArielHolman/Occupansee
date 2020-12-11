import React from "react";
import "./OccupancyTable.css"

const OccupancyTable = () => {
  return (
    <div className="occupancy-table">
      <div className="occupancy-table-container">
        <h2 className="occupancy-nums">11</h2>
        <p className="occupancy-title">Current Occupancy</p>
        {/* //currentOccupancy is the name of the variable on the chart component*/}
      </div>
      <div className="occupancy-table-container">
        <h2 className="occupancy-nums">45</h2>
        <p className="occupancy-title">Max Occupancy</p>
        {/* maxOccupancy is the name of the variable on the chart component*/}
      </div>
    </div>
  );
};

export default OccupancyTable;
