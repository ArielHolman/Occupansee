import React from "react";
import BusinessCard from "../BusinessCard/BusinessCard";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";

const BusinessSettings = ({ toggleDetails }) => {
  const [active, setState] = React.useState({
    isActive: null,
  });

  const [notification, setNotification] = React.useState({
    active: " ",
  });

  const handleChangeSwitch = (event) => {
    setState({ ...active, [event.target.name]: event.target.checked });
    // {
    //   toggleDetails;
    // }
    if (!event.target.checked) {
      setNotification({
        ...notification,
        active:
          "*By deactivating the business, customers will not be able to search for the business.*",
      });
    } else {
      setNotification({ ...notification, active: " " });
    }
  };

  return (
    <div className=" bg-white-90">
      <BusinessCard />
      <CardContent
        style={{
          paddingLeft: 130,
          paddingRight: 82,
          display: "flex",
          justifyContent:"center",
          flexDirection:"column",
        }}
      >
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 25,
            marginLeft: 248,
            marginRight: 325,
          }}
        >
          <Typography component="h2" style={{ fontWeight: "bold" }}>
            Activate/Deactivate
          </Typography>
          <Switch
            checked={active.isActive}
            onChange={handleChangeSwitch}
            name="isActive"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </CardActions>
        <Typography style={{ color: "red", textAlign: "center" }}>
          {notification.active}
        </Typography>
        <div className="flex justify-end mv4"
        style={{ marginRight:325}}>
          <button
            type="button"
            className="btn btn-info button-format pointer"
          >
            <Link style={{ color: "white" }} to="/dashboard">
              Save Changes
            </Link>
          </button>
        </div>
      </CardContent>
    </div>
  );
};

export default BusinessSettings;
