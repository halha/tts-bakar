import React from "react";
import Button from "@material-ui/core/Button";

export class Component extends React.Component {
    render() {
        return (
            <form>
                <section>
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Full Name" required />
                </section>
                <section>
                    <label>Username</label>
                    <input type="text" placeholder="Your Username" required />
                </section>
                <section>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="example@example.com"
                        required
                    />
                </section>
                <section>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Make it Secure!"
                        required
                    />
                </section>
                <Button type="submit" variant="contained" color="primary">
                    Register Me
                </Button>
            </form>
        );
    }
}

export default Component;
