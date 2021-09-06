import React, {useContext} from "react";
import { BusinessContext } from "../BusinessContextProvider/BusinessContextProvider";

const ProfileCard = () => {
  const {businessInfo} = useContext(BusinessContext)
  return (

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
                <h2 className="f2 mv1 mt0 ">
                  {businessInfo.businessname}
                </h2>
                <p className="f5  mv0 lh-copy">{businessInfo.street}</p>
                <p className="f5  mv0 lh-copy">
                  {businessInfo.city}, {businessInfo.state}{" "}{businessInfo.zip}
                </p>
                <p className="f5  mv0 lh-copy">{businessInfo.phone}</p>
                <p className="f5  mv0 lh-copy">{businessInfo.website}</p>
              </div>
            </div>
          </div>
  );
};

export default ProfileCard;
