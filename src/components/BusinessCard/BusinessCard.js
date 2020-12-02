import React from "react";
import "./BusinessCard.css";
import { BusinessContext } from "../BusinessContextProvider/BusinessContextProvider";

const BusinessCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <section className="mw7 avenir biz-card">
        <p className="center bg-green pa2 b ma0">Active</p>
        <BusinessContext.Consumer>
          {(context) => (
            <React.Fragment>
              <article className="bt bb b--black-10 pv2 ph5">
                <div className="flex flex-row-ns">
                  <div className="w-100 w-70-ns pl3-ns">
                    <h1
                      className="f3 fw1 baskerville mt0 lh-title"
                      style={{ marginBottom: 0 }}
                    >
                      {context.state.businessname}
                    </h1>
                    <p className="f6  mv0 lh-copy" style={{ margin: 6 }}>
                      {context.state.city}, {context.state.state}
                    </p>
                    <div
                      className="v-btm"
                      style={{ display: "flex", alignItems: "baseline" }}
                    >
                      <p className="lh-copy f3-l fw6" style={{ margin: 3 }}>
                        {context.state.maxoccupancy}
                      </p>
                    </div>
                    <p className="f6-l" style={{ margin: 0, paddingRight: 4 }}>
                      Max Occupancy
                    </p>
                  </div>
                  <div className="center">
                    <img
                      src="https://nitrocdn.com/CNKIidEmUjTyxuxShKseLbFuedcNDbhI/assets/static/optimized/rev-3c0aa26/wp-content/uploads/2019/10/Screen-Shot-2019-10-14-at-11.51.29-am.jpg"
                      className="db h4 w-70"
                      alt="Barista behind the counter preparing a coffee."
                    />
                  </div>
                </div>
              </article>
            </React.Fragment>
          )}
        </BusinessContext.Consumer>
      </section>
    </div>
  );
};
export default BusinessCard;
