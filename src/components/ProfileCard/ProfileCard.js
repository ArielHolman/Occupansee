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
                <h2 className="f2 fw1 baskerville mt0 lh-title">
                  {businessInfo.businessname}
                </h2>
                <p className="f6  mv0 lh-copy">{businessInfo.street}</p>
                <p className="f6  mv0 lh-copy mb2-l">
                  {businessInfo.city}, {businessInfo.state}{" "}{businessInfo.zip}
                </p>
                <p className="f6  mv0 lh-copy mb2-l">{businessInfo.phone}</p>
                <p className="f6  mv0 lh-copy">{businessInfo.website}</p>
              </div>
            </div>
          </div>
       
  );
};

export default ProfileCard;
