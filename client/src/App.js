import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import pages from "./pages";
import { ROUTES } from "./configs";

function App() {
    return (
        <Switch>
            <Route component={pages.Login} exact path={ROUTES.LOGIN()} />
            <Route component={pages.Register} exact path={ROUTES.REGISTER()} />
        </Switch>
    );
}

export default App;
