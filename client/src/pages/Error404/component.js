import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ROUTES } from "../../configs";

export class Component extends React.Component {
    render() {
        return (
            <section style={{ textAlign: "center" }}>
                <Typography variant="h2">Page not found</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={ROUTES.REGISTER}
                >
                    Back to Login
                </Button>
            </section>
        );
    }
}

export default Component;
