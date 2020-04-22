import React, { Component } from "react";

import classes from "./styles.module.css";

export class component extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      all: true,
    };
  }

  _handleClick = (e) => {
    const activeClass = classes.active;

    if (e.target.className === "" || (null && this.state.all)) {
      e.target.className = activeClass;
      this.setState({ clicked: true, all: false });
    } else {
      e.target.className = "";
    }
  };

  // _handleDefaultClick = (e) => {
  //   if (e.target.className === "" || (null && this.state.all)) {
  //     e.target.className = activeClass;
  //     this.setState({ all: false });
  //   } else {
  //     e.target.className = "";
  //   }
  // };

  render() {
    return (
      <ul className={classes.Filter}>
        {this.props.list.map((list) => (
          <li
            key={list.id}
            className={list.id === 0 && this.state.all ? classes.active : ""}
            onClick={this._handleClick}
          >
            {list.tag}
          </li>
        ))}
      </ul>
    );
  }
}

export default component;
