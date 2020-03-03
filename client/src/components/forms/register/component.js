import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./styles.module.css";

export class Component extends React.Component {
    constructor(props) {
        super();

        this.state = {
            fullName: "",
            userName: "",
            email: "",
            password: ""
        };
    }

    _handleChange = event => {
        const input = event.target;
        const value = input.value;
        this.setState({ [input.name]: value });
    };

    _handleCheckedSubmit = () => {
        const { fullName, userName, email, password } = this.state;

        localStorage.setItem("fullName", fullName);
        localStorage.setItem("userName", userName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    };

    render() {
        return (
            <form className={classes.form}>
                <TextField
                    margin="normal"
                    label="Full Name"
                    name="fullName"
                    onChange={this._handleChange}
                    required
                    fullWidth
                    autoFocus
                />
                <TextField
                    margin="normal"
                    label="Username"
                    name="username"
                    onChange={this._handleChange}
                    required
                    fullWidth
                />
                <TextField
                    margin="normal"
                    name="email"
                    label="Email Address"
                    onChange={this._handleChange}
                    required
                    fullWidth
                />
                <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    onChange={this._handleChange}
                    required
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonSubmit}
                >
                    Register Me
                </Button>
            </form>
        );
    }
}

export default Component;
