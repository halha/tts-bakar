import React, { Component } from "react";
import Drawer from "../../elements/Drawer";

export class component extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const login = localStorage.getItem("Login");
    if (login === "true") {
      this.setState({ isLoggedIn: true });
    }
  }

  _logOutHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Login", false);
    localStorage.removeItem("lastPath");
    window.location.reload();
  };

  render() {
    return (
      <>
        <Drawer
          login={this.state.isLoggedIn}
          logout={(e) => this._logOutHandler(e)}
        />
        {this.props.children}
      </>
    );
  }
}

export default component;
