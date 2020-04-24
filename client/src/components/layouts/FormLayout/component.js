import React, { Component } from "react";
import classes from "./styles.module.css";

export class component extends Component {
  _preventDragHandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.LeftImage}>
          <div className={classes.ImgBox}>
            <img
              src={require("../../../assets/Side.png")}
              alt="logo"
              onDragStart={this._preventDragHandler}
            />
          </div>
        </div>
        <div className={classes.Form}>{this.props.children}</div>
      </div>
    );
  }
}

export default component;
