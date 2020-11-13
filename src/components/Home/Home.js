import React, { Component } from "react";
import { businesses } from "../../businesses";
import "./Home.css";
import { Link } from "react-router-dom";

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
    const { isSignedIn } = this.props;

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
            <button className="searchbutton w-30 grow f4 link ph3 pv2 white bg-gold">
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
        {!isSignedIn && (
          <div>
            <button className="f5 link dim gold underline pa1 pointer">
              <Link to="/register-user">Are you a business owner?</Link>
            </button>
            <button className="f5 link dim gold underline pa1 pointer">
              <Link to="/signin">Sign In</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
