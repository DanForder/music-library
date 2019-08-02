import React, { Component } from "react";
import styles from "./Album.module.scss";
// import data from "../../assets/data/albumData";

class Album extends Component {
  state = { showAlbum: true };

  handleClick = () => {
    this.setState({ showAlbum: !this.state.showAlbum });
  };

  render() {
    return this.state.showAlbum ? (
      <div onClick={this.handleClick} className={styles.albumContainer}>
        <img src={this.props.data[this.props.index].image} alt="Album Cover" />
      </div>
    ) : (
      <div onClick={this.handleClick} className={styles.albumContainer}>
        <h2>{this.props.data[this.props.index].albumName}</h2>
        <h3>Artist : {this.props.data[this.props.index].artist}</h3>
        <h4>Released : {this.props.data[this.props.index].released}</h4>
      </div>
    );
  }
}

export default Album;
