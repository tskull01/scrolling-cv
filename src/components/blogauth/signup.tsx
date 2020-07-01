import React, { Component } from "react";
import Login from "./login";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

interface ISignupProps {
  signupSubmit: (login: Login) => void;
}
export default class signup extends Component<ISignupProps> {
  state = {
    currentLogin: new Login("", ""),
    doesPasswordMatch: false,
    showWarning: false,
    snackDiv: <div></div>,
  };

  getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      currentLogin: {
        email: event.target.value,
        password: this.state.currentLogin.password,
      },
    });
  };
  getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      currentLogin: {
        email: this.state.currentLogin.email,
        password: event.target.value,
      },
    });
  };
  getValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === this.state.currentLogin.password) {
      this.setState({ doesPasswordMatch: true, showWarning: false });
    } else {
      this.setState({ showWarning: true, doesPasswordMatch: false });
    }
  };
  handleClose = () => {
    this.setState({ snackDiv: <div></div> });
    if (this.state.doesPasswordMatch) {
      this.props.signupSubmit(this.state.currentLogin);
    }
  };
  handleLogin = () => {
    if (this.state.doesPasswordMatch) {
      this.setState({
        snackDiv: (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="success">
              You're now signed in
            </Alert>
          </Snackbar>
        ),
      });
    } else {
      this.setState({
        snackDiv: (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity="error">
              Passwords have to match
            </Alert>
          </Snackbar>
        ),
      });
    }
  };
  render() {
    return (
      <div className="login-view">
        <TextField
          required
          autoFocus={true}
          id="outlined-required"
          label="Email"
          type="email"
          variant="outlined"
          onChange={this.getEmail}
        />
        <TextField
          required
          autoFocus={true}
          id="outlined-required"
          label="Password"
          type="password"
          variant="outlined"
          onChange={this.getPassword}
        />
        <div>
          {!this.state.doesPasswordMatch ? (
            <TextField
              required
              error={true}
              id="outlined-required"
              label="Confirm Password"
              type="password"
              variant="outlined"
              onChange={this.getValidation}
              style={{ width: "100%" }}
            />
          ) : (
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              type="password"
              variant="outlined"
              onChange={this.getValidation}
              style={{ width: "100%" }}
            />
          )}
          {this.state.showWarning ? <h6>Passwords have to match</h6> : ""}
        </div>
        <Button onClick={(e) => this.handleLogin()}>Create new login </Button>
        {this.state.snackDiv}
      </div>
    );
  }
}
