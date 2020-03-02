import React, { Component } from "react";
import RegisterForm from "../../components/forms/Register";
import classes from "./styles.module.css";

export class component extends Component {
    render() {
        return (
            <main className={classes.container}>
                <section>
                    <h1 className={classes.tagline}>Register</h1>
                    <RegisterForm />
                </section>
            </main>
        );
    }
}

export default component;
