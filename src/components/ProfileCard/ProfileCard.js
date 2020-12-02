import React from "react";
import { BusinessContext } from "../BusinessContextProvider/BusinessContextProvider";

const ProfileCard = () => {
  return (
    <BusinessContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="flex flex-column">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <div style={{ marginRight: "3rem" }}>
                <h2 className="f2 fw1 baskerville mt0 lh-title">
                  {context.state.businessname}
                </h2>
                <p className="f6  mv0 lh-copy">{context.state.street}</p>
                <p className="f6  mv0 lh-copy mb2-l">
                  {context.state.city}, {context.state.state}{" "}{context.state.zip}
                </p>
                <p className="f6  mv0 lh-copy mb2-l">{context.state.phone}</p>
                <p className="f6  mv0 lh-copy">{context.state.website}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </BusinessContext.Consumer>
  );
};

export default ProfileCard;
