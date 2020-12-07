import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileImage from "../ProfileImage/ProfileImage";
import OccupancyChart from "../OccupancyChart/OccupancyChart";
import OccupancyTable from "../OccupancyTable/OccupancyTable";
import "./BusinessProfile.css"

const BusinessProfile = () => {
  return (
    <div className="business-profile" >
      <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin:2,
          paddingBottom:25,
        }}>
        <ProfileCard />
        <ProfileImage />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: 2,
          paddingBottom:25,
        }}
      >
        <OccupancyChart />
        <OccupancyTable />
      </div>
    </div>
  );
};

export default BusinessProfile;
