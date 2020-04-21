import React from "react";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Input } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

const styles = (theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "4px 16px",
  },
  fccWidth: {
    width: "85%",
  },
  fcWidth: {
    width: "100%",
  },
  icWidth: {
    width: "10%",
  },
  buttonProgress: {
    color: "#fff",
  },
});

const CustomField = withStyles({
  root: {
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "#7c87f2",
    },
  },
  underline: {
    "&:after": {
      borderBottom: "2px solid #fff",
    },
    "&:before": {
      borderBottom: "1px solid #7c87f2",
    },
  },
  input: {
    color: "#fff",
  },
})(Input);

const CustomLabel = withStyles({
  root: {
    color: "#fff",
  },
  focused: {
    "&.MuiFormLabel-root": {
      color: "#fff",
    },
  },
})(InputLabel);

class component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      password: "",
      loading: false,
      remember: false,
      errorEmail: false,
      errorPass: false,
      errorEmailMsg: "",
      errorPassMsg: "",
      errorAll: false,
      errorAllMsg: "Fill all fields",
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  componentDidMount() {
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    if (email && password) {
      this.setState({
        email: email,
        password: password,
        remember: true,
      });
    }
  }

  handleClickShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  handleChangeEmail(e) {
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    let email = e.target.value;
    validateEmail(email)
      ? this.setState({
          email: email,
          errorEmail: false,
          errorEmailMsg: "",
        })
      : this.setState({
          errorEmail: true,
          errorEmailMsg: "Email is not valid",
        });
    email === ""
      ? this.setState({
          errorEmail: false,
          errorEmailMsg: "",
        })
      : this.setState({
          email: email,
        });
    this.setState({
      email: email,
    });
  }

  handleChangePassword(e) {
    e.target.value === ""
      ? this.setState({
          errorPass: false,
          errorPassMsg: "",
        })
      : this.setState({
          password: e.target.value,
        });
    this.setState({
      password: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    let dEmail = "hammam@test.com";
    let dPass = "hammamTest123";
    let email = this.state.email;
    let password = this.state.password;
    if (email !== dEmail) {
      this.setState({
        errorEmail: true,
        errorEmailMsg: "Email not found",
      });
    }
    if (password !== dPass) {
      this.setState({
        errorPass: true,
        errorPassMsg: "Password combination is incorrect",
      });
    }
    if (!email && !password) {
      this.setState({
        errorAll: true,
      });
    } else {
      if (email === dEmail && password === dPass) {
        localStorage.setItem("Login", "true");
        if (this.state.remember === true) {
          this.handleRemember({ email, password });
          window.location.reload();
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          window.location.reload();
        }
      } else {
        localStorage.setItem("Login", "false");
      }
    }
  }

  handleChangeRemember(e) {
    if (e.target.value) {
      this.setState({
        remember: !this.state.remember,
      });
    }
  }

  handleRemember({ email, password }) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 style={{ fontSize: "3rem" }}>Masuk</h1>
        <form className={classes.form} onSubmit={(e) => this.handleOnSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item className={classes.fccWidth}>
                  <FormControl className={classes.fcWidth} variant="standard">
                    <CustomLabel
                      htmlFor="email"
                      error={this.state.errorEmail ? true : false}
                    >
                      Email
                    </CustomLabel>
                    <CustomField
                      required
                      fullWidth
                      autoFocus
                      error={
                        this.state.errorEmail || this.state.errorAll
                          ? true
                          : false
                      }
                      type="email"
                      id="email"
                      onChange={(e) => this.handleChangeEmail(e)}
                      value={this.state.email}
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                    {this.state.errorEmailMsg !== "" ? (
                      <FormHelperText error>
                        {this.state.errorEmailMsg}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                    {this.state.errorAll === true ? (
                      <FormHelperText error>
                        {this.state.errorALlMsg}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item className={classes.fccWidth}>
                  <FormControl className={classes.fcWidth} variant="standard">
                    <CustomLabel
                      error={
                        this.state.errorPass || this.state.errorAll
                          ? true
                          : false
                      }
                      htmlFor="outlined-adornment-password"
                    >
                      Password
                    </CustomLabel>
                    <CustomField
                      id="outlined-adornment-password"
                      type={this.state.showPassword ? "text" : "password"}
                      onChange={(e) => this.handleChangePassword(e)}
                      value={this.state.password}
                      error={
                        this.state.errorPass || this.state.errorAll
                          ? true
                          : false
                      }
                      label="Password"
                      name="password"
                      autoComplete="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                          >
                            {this.state.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                    {this.state.errorPassMsg !== "" ? (
                      <FormHelperText error>
                        {this.state.errorPassMsg}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                    {this.state.errorAll === true ? (
                      <FormHelperText error>
                        {this.state.errorALlMsg}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => this.handleChangeRemember(e)}
                    checked={this.state.remember}
                    value={this.state.remember}
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "#7c87f2",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
            className={classes.submit}
          >
            {this.state.loading ? (
              <CircularProgress size={24} className={classes.buttonProgress} />
            ) : (
              this.props.type
            )}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                to="/register"
                variant="body2"
                style={{
                  textDecoration: "none",
                  opacity: ".8",
                  fontSize: ".8rem",
                }}
              >
                Buat akun baru
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(component);
