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
      <div className="home pa1-ns ma0">
        <div className="tc bg-white-90 mh6 mv pa1-ns pb2-ns">
          <h1 className="f1 ma3">Occupansee</h1>
          <div className="text-container">
            <p className="f3 swipe">
              {
                "Search for any business near you, see what their current occupancy is, plan your next trip!"
              }
            </p>
          </div>
          <div className="center">
            <div className="search center pa2 br3 shadow-5 mb3">
              <input
                className="f4 pa2 w-70 center"
                type="text"
                placeholder="Search Businesses"
              />
              <button className="searchbutton w-30 grow f4 link ph3 pv2 white  pointer">
                Search!
              </button>
            </div>
          </div>
          <ul className="center flex flex-column list f4 pb1-ns">
            <li> 1) Search for a business</li>
            <li> 2) Select the business</li>
            <li> 3) View current occupancy</li>
            <li> 4) Plan your next visit!</li>
          </ul>
          {!isSignedIn && (
            <div className="ma3">
              <a className="f6 link underline pa1 pointer blue">
                <Link to="/register-user">Register your business </Link>
              </a>
              <br />
              <a className="f6 link underline pa1 pointer blue">
                Already have an account? <Link to="/signin">Sign In</Link>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
