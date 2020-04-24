import React, { Component } from "react";
import PageBase from "../../components/layouts/PageBase";

export class component extends Component {
  componentDidMount() {
    document.title = "BaKar | No result";
  }

  render() {
    return (
      <PageBase>
        <h1>Found 0 Result</h1>
      </PageBase>
    );
  }
}

export default component;
