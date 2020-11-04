import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import { businesses } from "./businesses";

class App extends Component {
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
    return (
      <div className="tc">
        <h1>Occupansee</h1>
        <SearchBar searchChange={this.onSearchChange} />
        <CardList businesses={filteredBusinesses} />
      </div>
    );
  }
}

export default App;
