import React, { Component } from "react";

class SearchBar extends Component {
  state = { value: "" };

  handleOnChange = event => {
    this.props.onSearch(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleOnChange}
          placeholder="Search Cards..."
        />{" "}
      </div>
    );
  }
}

export default SearchBar;
