import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";

const CustomSelect = withStyles({
  root: {
    borderRadius: "50%",
  },
  outlined: {
    borderRadius: "50%",
  },
})(Select);

export class component extends Component {
  constructor() {
    super();

    this.state = {
      age: "populer",
    };
  }

  _handleChange = (e) => {
    this.setState({ age: e.target.value });
  };
  render() {
    return (
      <CustomSelect
        native
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={this.state.age}
        onChange={this._handleChange}
        variant="outlined"
      >
        <option value="populer">Populer</option>
        <option value="terbaru">Terbaru</option>
        <option value="terlama">Terlama</option>
      </CustomSelect>
    );
  }
}

export default component;
