import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PageBase from "../../components/layouts/PageBase";

export class component extends Component {
  _logOutHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Login", false);
    localStorage.removeItem("lastPath");
    window.location.reload();
  };

  render() {
    return (
      <PageBase logout={(e) => this._logOutHandler(e)}>
        <h1>Welcome</h1>
        <Button onClick={(e) => this._logOutHandler(e)}>Logout</Button>
      </PageBase>
    );
  }
}

export default component;
