import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import pages from "./pages";
import { ROUTES } from "./configs";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      lastPath: "",
    };
  }

  componentDidMount() {
    const login = localStorage.getItem("Login");
    const lastPath = localStorage.getItem("lastPath");
    if (login) {
      if (login === "true") {
        if (lastPath) {
          this.setState({
            isLoggedIn: true,
            lastPath: lastPath,
          });
        } else {
          this.setState({
            isLoggedIn: true,
          });
        }
      }
    }
  }

  _RenderApp() {
    return (
      <>
        <Redirect
          from="/login"
          to={this.state.lastPath ? this.state.lastPath : "/"}
        />
        <Route component={pages.Error404} />
      </>
    );
  }

  _RenderLogin() {
    return (
      <>
        <Route component={pages.Login} exact path={ROUTES.LOGIN()} />
        <Route component={pages.Register} exact path={ROUTES.REGISTER()} />
        <Route>
          <Redirect to="/login" />
        </Route>
      </>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={pages.Home} exact path={ROUTES.HOME()} />
          <Route component={pages.Seacrh} exact path={ROUTES.SEARCH()} />
          {this.state.isLoggedIn ? this._RenderApp() : this._RenderLogin()}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
