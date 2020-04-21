import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Input, InputLabel } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

const styles = (theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  fcWidth: {
    width: "100%",
  },
  buttonProgress: {
    color: "#fff",
  },
  topForm: {
    width: "45%",
  },
  topFormContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
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
      showPasswordConfirm: false,
      password: "",
      nama: "",
      email: "",
      password2: "",
      agree: "",
      loading: false,
      errorAll: false,
      errorAllMsg: "Fill all field",
      errorName: false,
      errorNameMsg: "",
      errorEmail: false,
      errorEmailMsg: "",
      errorPass: false,
      errorPassMsg: "",
      errorCPass: false,
      errorCPassMsg: "",
    };
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleClickShowPasswordConfirm = this.handleClickShowPasswordConfirm.bind(
      this
    );
  }

  handleClickShowPassword() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  handleClickShowPasswordConfirm() {
    this.setState({
      showPasswordConfirm: !this.state.showPasswordConfirm,
    });
  }

  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  handleChangePassword(e) {
    e.target.value.length < 8
      ? this.setState({
          errorPass: true,
          errorPassMsg: "Password must more than 8 character",
        })
      : this.setState({
          errorPass: false,
          errorPassMsg: "",
        });
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

  handleChangePasswordConfirm(e) {
    e.target.value !== this.state.password
      ? this.setState({
          errorCPass: true,
          errorCPassMsg: "Password is not match",
        })
      : this.setState({
          password2: e.target.value,
          errorCPass: false,
          errorCPassMsg: "",
        });
    e.target.value === ""
      ? this.setState({
          errorCPassMsg: "",
          errorCPass: false,
        })
      : this.setState({
          password2: e.target.value,
        });
    this.setState({
      password2: e.target.value,
    });
  }

  handleChangeAgree(e) {
    this.setState({
      agree: e.target.value,
    });
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

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleOnSubmit}>
        <h1 style={{ fontSize: "3rem" }}>Daftar</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.topFormContainer}>
            <FormControl
              className={[classes.fcWidth, classes.topForm].join(" ")}
              variant="standard"
            >
              <CustomLabel htmlFor="name">Name</CustomLabel>
              <CustomField
                required
                fullWidth
                autoFocus
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
            </FormControl>
            <FormControl
              className={[classes.fcWidth, classes.topForm].join(" ")}
              variant="standard"
            >
              <CustomLabel htmlFor="username">Username</CustomLabel>
              <CustomField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={1}>
                <PersonIcon />
              </Grid>
              <Grid item xs={11}>
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
                    error={this.state.errorEmail ? true : false}
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
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={1}>
                <LockIcon />
              </Grid>
              <Grid item xs={11}>
                <FormControl className={classes.fcWidth} variant="standard">
                  <CustomLabel
                    htmlFor="password"
                    error={this.state.errorPass ? true : false}
                  >
                    Password
                  </CustomLabel>
                  <CustomField
                    id="password"
                    type={this.state.showPassword ? "text" : "password"}
                    onChange={(e) => this.handleChangePassword(e)}
                    value={this.state.password}
                    error={this.state.errorPass ? true : false}
                    label="Password"
                    name="password"
                    required
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
                  onChange={(e) => this.handleChangeAgree(e)}
                  required
                  value="agree"
                  color="primary"
                />
              }
              label={
                <div style={{ opacity: "0.8", fontSize: ".8rem" }}>
                  <span>Saya menyetujui </span>
                  <a
                    href="https://www.termsfeed.com/terms-conditions/c4152b0db055858686b2f4e5700f817a"
                    target="_blank"
                    variant="body2"
                    style={{ textDecoration: "none", fontWeight: "bold" }}
                  >
                    Semua syarat
                  </a>
                  <span> yang berlaku</span>
                </div>
              }
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
            "Daftar"
          )}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(component);
