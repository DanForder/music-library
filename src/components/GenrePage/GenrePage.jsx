import React, { Component } from "react";
import styles from "./GenrePage.module.scss";
import Album from "../Album/Album";

class GenrePage extends Component {
  state = {};

  //for every album in this genre, generate an Album tag
  addAlbumsByGenre = () => {
    let albumArray = [];
    this.props.albumsToRender.forEach((album, index) => {
      albumArray.push(
        <Album
          data={this.props.albumsToRender}
          key={index}
          index={index}
          name={album.albumName}
        />
      );
    });
    return albumArray;
  };

  render() {
    return (
      <main>
        <h2>
          {this.props.genre.charAt(0).toUpperCase() + this.props.genre.slice(1)}
        </h2>
        <div className={styles.wrapper}>{this.addAlbumsByGenre()}</div>
      </main>
    );
  }
}

export default GenrePage;
