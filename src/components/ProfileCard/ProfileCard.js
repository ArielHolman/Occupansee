import React from "react";
import ProfileImage from "../ProfileImage/ProfileImage";
import Chart from "chart.js"
import OccupancyChart from "../OccupancyChart/OccupancyChart"

const ProfileCard = ({ location }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 30,
        }}
      >
        <div>
          <h2
            className="f3 fw1 baskerville mt0 lh-title"
            style={{ marginBottom: 0 }}
          >
            Business Name Goes Here
            {/* {location.name} */}
          </h2>
          <p className="f6  mv0 lh-copy">
            2020 Business Address St.
            {/* {location.street} */}
          </p>
          <p className="f6  mv0 lh-copy">
            Austin, TX 78660
            {/* {location.city}, {location.state} {location.zip}*/}
          </p>
          <p className="f6  mv0 lh-copy">
            512-888-0000
            {/* {location.phone}*/}
          </p>
          <p className="f6  mv0 lh-copy">
            www.bizwebsite.com
            {/* {location.website}*/}
          </p>
        </div>
        <div>
          <ProfileImage />
        </div>
      </div>
      <div>
        <OccupancyChart />
      </div>
    </div>
  );
};

export default ProfileCard;
