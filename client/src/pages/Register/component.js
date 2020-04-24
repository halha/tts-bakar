import React, { Component } from "react";
import FormLayout from "../../components/layouts/FormLayout";
import Register from "../../components/forms/Register";

class component extends Component {
  componentDidMount() {
    document.title = "BaKar | Register";
  }

  render() {
    return (
      <FormLayout>
        <Register type="Login" history={this.props.history} {...this.props} />
      </FormLayout>
    );
  }
}

export default component;
