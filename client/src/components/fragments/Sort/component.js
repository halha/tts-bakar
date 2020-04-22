import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

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
    const { classes } = this.props;
    return (
      <CustomSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={this.state.age}
        onChange={this._handleChange}
        variant="outlined"
      >
        <MenuItem value="populer">Populer</MenuItem>
        <MenuItem value="terbaru">Terbaru</MenuItem>
        <MenuItem value="terlama">Terlama</MenuItem>
      </CustomSelect>
    );
  }
}

export default component;
