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

  render() {
    return (
      <div>
        <Drawer login={this.state.isLoggedIn} />
        {this.props.children}
      </div>
    );
  }
}

export default component;
