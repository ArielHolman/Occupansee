import React from "react";
import "./BusinessCard.css";

const BusinessCard = ({ business }) => {
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <section className="mw7 avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">Welcome User,</h2>
        <p className="center">Keep your customers up to date!</p>
        <p className="center bg-green pa2 b">Active</p>
        <article className="bt bb b--black-10 pv4 ph5">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-70-ns pl3-ns">
              <h1
                className="f3 fw1 baskerville mt0 lh-title"
                style={{ marginBottom: 0 }}
              >
                {business.name}
              </h1>
              <p className="f6  mv0 lh-copy" style={{ margin: 6 }}>
                {business.city}, {business.state}
              </p>
              <div
                className="v-btm"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <p className="lh-copy f3-l fw6" style={{ margin: 3 }}>
                  {business.maxoccupancy}
                </p>
                <p className="f6-l" style={{ margin: 0, paddingRight: 4 }}>
                  Max Occupancy
                </p>
              </div>
            </div>
            <div className="mb5 mb0-ns w-100 w-20-ns center">
              <img
                src="https://nitrocdn.com/CNKIidEmUjTyxuxShKseLbFuedcNDbhI/assets/static/optimized/rev-3c0aa26/wp-content/uploads/2019/10/Screen-Shot-2019-10-14-at-11.51.29-am.jpg"
                className="db br-100 h7"
                alt="Barista behind the counter preparing a coffee."
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
export default BusinessCard;
