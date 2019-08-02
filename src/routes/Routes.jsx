import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import GenrePage from "../components/GenrePage/GenrePage";
import albumData from "../assets/data/albumData";

const NotFound = () => <h2>Not Found</h2>;

class Routes extends Component {
  punkAlbums = albumData.filter(album => {
    return album.genre === "punk";
  });

  reggaeAlbums = albumData.filter(album => {
    return album.genre === "reggae";
  });

  classicalAlbums = albumData.filter(album => {
    return album.genre === "classical";
  });

  render() {
    // console.log(this.punkAlbums);
    // console.log(this.reggaeAlbums);
    // console.log(this.classicalAlbums);
    return (
      <Router primary={false}>
        <Redirect noThrow from="/" to="punk" />
        <GenrePage albumsToRender={this.punkAlbums} genre="punk" path="punk" />
        <GenrePage
          albumsToRender={this.reggaeAlbums}
          genre="reggae"
          path="reggae"
        />
        <GenrePage
          albumsToRender={this.classicalAlbums}
          genre="classical"
          path="classical"
        />
        <NotFound default />
      </Router>
    );
  }
}
export default Routes;
