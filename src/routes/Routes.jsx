import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";

const NotFound = () => <h2>Not Found</h2>;

class Routes extends Component {
  render() {
    return (
      <Router primary={false}>
        <Redirect noThrow from="/" to="punk" />
        <NotFound default />
      </Router>
    );
  }
}
export default Routes;
