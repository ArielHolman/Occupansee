import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileImage from "../ProfileImage/ProfileImage";
import OccupancyChart from "../OccupancyChart/OccupancyChart";
import OccupancyTable from "../OccupancyTable/OccupancyTable";
import "./BusinessProfile.css"
import Navigation from '../Navigation/Navigation';

const BusinessProfile = () => {
  return (
    <div>
      <Navigation />
    <div className="ma5" >
      <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ProfileCard />
        <ProfileImage />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:25,
        }}
      >
        <OccupancyChart />
        <OccupancyTable />
      </div>
    </div>
    </div>
  );
};

export default BusinessProfile;
