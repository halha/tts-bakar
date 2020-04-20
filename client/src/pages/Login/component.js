import React, { Component } from "react";
import Login from "../../components/forms/Login";
import classes from "./styles.module.css";

class component extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.LeftImage}>
          <div className={classes.ImgBox}>
            <img src={require("../../assets/Side.png")} alt="logo" />
          </div>
        </div>
        <div className={classes.Login}>
          <Login type="Login" history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default component;
