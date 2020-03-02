import React from "react";
import LoginForm from "../../components/forms/Login";
import classes from "./styles.module.css";

export default class Component extends React.Component {
    render() {
        return (
            <main className={classes.container}>
                <section>
                    <h1 className={classes.tagline}>Hi, Welcome Back</h1>
                    <LoginForm />
                </section>
            </main>
        );
    }
}
