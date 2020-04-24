import React, { Component } from "react";
import FormLayout from "../../components/layouts/FormLayout";
import Login from "../../components/forms/Login";

class component extends Component {
  componentDidMount() {
    document.title = "BaKar | Login";
  }

  render() {
    return (
      <FormLayout>
        <Login type="Login" history={this.props.history} />
      </FormLayout>
    );
  }
}

export default component;
