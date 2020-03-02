import React from "react";
import LoginForm from "../../components/forms/Login";

export default class Component extends React.Component {
    render() {
        return (
            <main>
                <h1>Login</h1>
                <LoginForm />
            </main>
        );
    }
}
