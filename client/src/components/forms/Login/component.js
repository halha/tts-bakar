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
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    required
                    fullWidth
                    autoFocus
                />
                <TextField
                    margin="normal"
                    name="password"
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonSubmit}
                >
                    Login
                </Button>
            </form>
        );
    }
}

export default Component;
