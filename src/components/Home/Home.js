import React, { Component } from "react";
import { businesses } from "../../businesses";
import "./Home.css";
import { Link } from "react-router-dom";
import { BusinessOwnerContext } from "../BusinessOwnerContextProvider/BusinessOwnerContextProvider";
import cookie from "cookie";
import Navigation from "../Navigation/Navigation"

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
    const cookies = cookie.parse(document.cookie);

    // const filteredBusinesses = this.state.businesses.filter((businesses) => {
    //   return businesses.businessName
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase());
    // });

    if (this.state.businesses.legnth === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <BusinessOwnerContext.Consumer>
          {(context) => (
            <>
            <Navigation />
            <section className="home ma0">
              <div className="tc bg-black-70 white-90">
                <h1 className="f-subheadline ma2 pt2-ns">Occupansee</h1>
                <div className="text-container">
                  <p className="f3 swipe">{"No more waiting in lines!"}</p>
                </div>
                <div className="center">
                  <div className="search center pa2 br3 shadow-5 mb3">
                    <input
                      className="f4 pa2 w-70 center"
                      type="search"
                      placeholder="Search Businesses"
                      onChange={this.onSearchChange}
                    />
                    <button className="searchbutton w-30 grow f4 link ph3 pv2 white pointer">
                    <Link to={{pathname: "/profile", search: `?search=${this.state.searchfield}`}} className="white">
                      Search!
                    </Link>
                    </button>
                  </div>
                </div>
                <ul className="center flex flex-column list f4 pb4-ns">
                  <li> 1. Search for a business</li>
                  <li> 2. Select the business</li>
                  <li> 3. View current occupancy</li>
                  <li> 4. Plan your next visit!</li>
                </ul>
                {!cookies.loggedIn && (
                  <div className="ma3 pb3-l">
                    <span className="f5 underline link pa1 pointer">
                      <Link to="/register-business-owner" className="link-font">
                        Register your business TODAY!
                      </Link>
                    </span>
                    <br />
                    <p className="f5 pa1 pointer">
                      Already have an account?{" "}
                      <Link to="/signin" className="link-font underline">
                        Sign In
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </section>
            </>
          )}
        </BusinessOwnerContext.Consumer>
      );
    }
  }
}

export default Home;
