import React, { Component } from "react";
import { businesses } from "../../businesses";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      businesses: businesses,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredBusinesses = this.state.businesses.filter((businesses) => {
      return businesses.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    const { onRouteChange, isSignedIn } = this.props;

    return (
      <div className="tc">
        <h1>Occupansee</h1>
        <p className="f3">
          {
            "Search for any business near you, see what their current occupancy is, plan your next trip!"
          }
        </p>
        <div className="center">
          <div className="search center pa3 br3 shadow-5">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              placeholder="Search Businesses"
            />
            <button className="searchButton w-30 grow f4 link ph3 pv2 white bg-gold">
              Search!
            </button>
          </div>
        </div>
        <ol>
          <li className="center"> 1) Search for a business nearby</li>
          <li className="center">
            {" "}
            2) Select the business you’re interested in
          </li>
          <li className="center">
            {" "}
            3) See the occupancy and plan your next visit!
          </li>
        </ol>
        {!isSignedIn && (<div>
          <p
            onClick={() => onRouteChange("register")}
            className="f5 link dim gold underline pa1 pointer"
          >
            Are you a business owner?
          </p>
          <p
            onClick={() => onRouteChange("signin")}
            className="f5 link dim gold underline pa1 pointer"
          >
            Sign In
          </p>
        </div>)}

      </div>
    );
  }
}

export default Home;
