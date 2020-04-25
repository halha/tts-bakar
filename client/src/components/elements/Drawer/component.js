import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./styles.module.css";

export class component extends Component {
  _preventDragHandler = (e) => {
    e.preventDefault();
  };

  _renderAfterLogin = () => {
    return (
      <nav className={classes.Nav}>
        <Link to="/" className={classes.logo}>
          <div className={classes.imgBox}>
            <img
              src={require("../../../assets/LOGO.svg")}
              alt="Bakar"
              onDragStart={this._preventDragHandler}
            />
          </div>
          <span>bakar</span>
        </Link>
        <ul>
          <li>
            <Link to="/" className={classes.Link}>
              Upload
            </Link>
          </li>
          <li>
            <span onClick={this.props.logout} className={classes.Link}>
              Keluar
            </span>
          </li>
          <li>
            <div className={classes.avatarBox}>
              <img
                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription01&hairColor=Red&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Squint&eyebrowType=Angry&mouthType=Tongue&skinColor=Pale"
                alt="avatar"
              />
            </div>
          </li>
        </ul>
      </nav>
    );
  };

  _renderBeforeLogin = () => {
    return (
      <nav className={classes.Nav}>
        <Link to="/" className={classes.logo}>
          <div className={classes.imgBox}>
            <img
              src={require("../../../assets/LOGO.svg")}
              alt="Bakar"
              onDragStart={this._preventDragHandler}
            />
          </div>
          <span>bakar</span>
        </Link>
        <ul>
          <li>
            <Link to="/login" className={classes.Link}>
              Masuk
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className={[classes.Link, classes.signUp].join(" ")}
            >
              Daftar
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  render() {
    return (
      <>
        {this.props.login
          ? this._renderAfterLogin()
          : this._renderBeforeLogin()}
      </>
    );
  }
}

export default component;
