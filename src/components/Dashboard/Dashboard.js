import React, { useState, useContext } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import BusinessCard from "../BusinessCard/BusinessCard";
import DashboardButton from "../DashboardButton/DashboardButton";
import { BusinessOwnerContext } from "../../components/BusinessOwnerContextProvider/BusinessOwnerContextProvider";

const Dashboard = () => {
  // const { mockBiz } = location.state;
  const { businessOwner } = useContext(BusinessOwnerContext);
  const [business, setBusiness] = useState({});
  const toggleDetails = () => {
    const { isActive } = business;
    setBusiness({ ...business, isActive: !isActive });
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
      className="dashboard bg-white-90 mh6 pt3-ns"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="flex flex-column justify-start w-75">
        <h2 className="f3">Hello {businessOwner.firstName},</h2>
        <p>
          Keep your customers up to date by tracking your occupancy at the door!
        </p>
      </div>
      <section className="mw7 avenir pb2">
        <BusinessCard />
        <div
          className="pt2"
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
            to={(business) => ({
              ...business,
              toggleDetails,
              pathname: "/settings",
            })}
          >
            <DashboardButton buttonInfo={settingsButton} />
          </Link>
          <Link
            to={(location) => ({
              ...location,
              pathname: "/profile",
            })}
          >
            <DashboardButton buttonInfo={profileButton} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
