import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class component extends Component {
  _logOutHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Login", false);
    localStorage.removeItem("lastPath");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Button onClick={(e) => this._logOutHandler(e)}>Logout</Button>
      </div>
    );
  }
}

export default component;
