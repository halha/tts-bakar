import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./styles.module.css";

export class Component extends React.Component {
    render() {
        return (
            <form className={classes.form}>
                <TextField
                    margin="normal"
                    label="Full Name"
                    name="fullName"
                    required
                    fullWidth
                    autoFocus
                />
                <TextField
                    margin="normal"
                    label="Username"
                    name="username"
                    required
                    fullWidth
                />
                <TextField
                    margin="normal"
                    name="email"
                    label="Email Address"
                    required
                    fullWidth
                />
                <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
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
