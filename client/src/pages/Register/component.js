import React, { Component } from "react";
import Register from "../../components/forms/Register";
import Typography from "@material-ui/core/Typography";
import PersonAdd from "@material-ui/icons/PersonAdd";
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
          <Register type="Login" history={this.props.history} {...this.props} />
        </div>
      </div>
    );
  }
}

export default component;
