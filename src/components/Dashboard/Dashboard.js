import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import BusinessCard from "../BusinessCard/BusinessCard";
import DashboardButton from "../DashboardButton/DashboardButton";

const Dashboard = ({ location }) => {
  const { mockBiz } = location.state;

  const [business, setBusiness] = useState({ ...mockBiz });

  const toggleDetails = () => {
    const { isActive } = business;
    setBusiness({ isActive: !business.isActive });
  };
  // need to make sure toggle details are being passed into the correct pages and need to connect it to the active barso it can make actual changes to the background color.

  const editButton = {
    imgLink: "https://image.flaticon.com/icons/png/512/84/84380.png",
    imgTitle: "Notebook and pen icon",
    buttonName: "Edit Business Information",
  };

  const trackerButton = {
    imgLink:
      "https://cdn4.iconfinder.com/data/icons/infographic-bar-6/512/1-512.png",
    imgTitle: "Graph icon",
    buttonName: "Business Tracker",
  };

  const settingsButton = {
    imgLink:
      "https://cdn1.iconfinder.com/data/icons/construction-2-13/48/67-512.png",
    imgTitle: "Gear icon",
    buttonName: "Settings",
  };

  const profileButton = {
    imgLink: "https://cdn.onlinewebfonts.com/svg/img_191958.png",
    imgTitle: "Profile icon",
    buttonName: "View Profile",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <section className="mw7 avenir">
        <BusinessCard business={business} />
        <div
          className="pt4"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/edit">
            <DashboardButton buttonInfo={editButton} />
          </Link>
          <Link to="/tracker">
            <DashboardButton buttonInfo={trackerButton} />
          </Link>
          <Link
            to={(location) => ({
              ...location,
              toggleDetails,
              pathname: "/settings",
            })}
          >
            <DashboardButton buttonInfo={settingsButton} />
          </Link>
          <Link to="/profile">
            <DashboardButton buttonInfo={profileButton} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
