import React from "react";
import BusinessCard from "../BusinessCard/BusinessCard";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

const BusinessSettings = ({ location, toggleDetails }) => {
  const [active, setState] = React.useState({
    isActive: true,
    isNotActive: false,
  });

  const [notification, setNotification] = React.useState({
    active: " ",
  });

  const handleChangeSwitch = (event) => {
    setState({ ...active, [event.target.name]: event.target.checked });
    debugger;
    {
      toggleDetails;
    }
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

  const { mockBiz } = location.state;

  return (
    <div>
      <BusinessCard business={mockBiz} />
      <CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 25,
            marginLeft: 365,
            marginRight: 450,
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
            style={{ color: "#16AA74"}}
          />
        </CardActions>
        <Typography style={{ color: "red", textAlign: "center" }}>
          {notification.active}
        </Typography>
      </CardContent>
    </div>
  );
};

export default BusinessSettings;
