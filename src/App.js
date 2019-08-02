import React, { Component } from "react";
import "./App.scss";
import Routes from "./routes/Routes";
import { Link } from "@reach/router";
// import SearchBar from "./components/SearchBar/SearchBar";
// import GenrePage from "./components/GenrePage/GenrePage";

class App extends Component {
  state = {};

  // onSearchBarChange = value => {
  //   console.log(value);
  // };

  render() {
    return (
      <div>
        <h1>The Ultimate 3-Genre Music Library</h1>
        <nav>
          <Link to="/punk">Punk</Link>
          <Link to="/reggae">Reggae</Link>
          <Link to="/classical">Classical</Link>
        </nav>
        {/* <SearchBar onSearch={this.onSearchBarChange} /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
