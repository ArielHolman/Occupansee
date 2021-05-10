import React, { useContext } from "react";
import "./BusinessCard.css";
import { BusinessContext } from "../../components/BusinessContextProvider/BusinessContextProvider";

const BusinessCard = () => {
  const { businessInfo } = useContext(BusinessContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <section className="mw7 avenir biz-card">
        <article className="bt bb b--black-10 pv2 ph5">
          <div className="flex flex-row-ns">
            <div className="w-100 w-70-ns pl3-ns">
              <h1
                className="f3 fw1 baskerville mt0 lh-title"
                style={{ marginBottom: 0 }}
              >
                {businessInfo.businessname}
              </h1>
              <p className="f6  mv0 lh-copy" style={{ margin: 6 }}>
                {businessInfo.city}, {businessInfo.state}
              </p>
              <div
                className="v-btm"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <p className="lh-copy f3-l fw6" style={{ margin: 3 }}>
                  {businessInfo.maxoccupancy}
                </p>
              </div>
              <p className="f6-l" style={{ margin: 0, paddingRight: 4 }}>
                Max Occupancy
              </p>
            </div>
            <div className="center">
              <img
                src="https://cdn11.bigcommerce.com/s-7dfz0/images/stencil/1280x1280/products/4384/7652/PFUTX010_westpecan__49383.1582221551.jpg?c=2"
                className="db h4 w-50"
                alt="outside of a coffee shop."
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default BusinessCard;
