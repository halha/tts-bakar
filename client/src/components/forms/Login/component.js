import React from "react";

export class Component extends React.Component {
    render() {
        return (
            <form>
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
                        placeholder="Your Password"
                        required
                    />
                </section>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Component;
