import React, { Component } from "react";
import Login from "./login";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Observable } from "rxjs";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface ILoginProps {
  checkLogin: (login: Login) => Observable<any>;
  loginSuccess: () => void;
  signupSelected: () => void;
}

export default class loginform extends Component<ILoginProps> {
  state = {
    currentLogin: new Login("", ""),
    snackDiv: <div></div>,
    offerSignup: false,
  };
  getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentLogin: { email: event.target.value } });
  };
  getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentLogin: { password: event.target.value } });
  };
  attemptLogin = () => {
    this.showCheckingSnack();
    this.setState({ offerSignup: false });
    let answer = this.props.checkLogin(this.state.currentLogin);
    let databaseRespose = { email: "", password: "" };
    answer.subscribe((canWeLogIn: Response) => {
      canWeLogIn
        .json()
        .then(
          (promise) =>
            (databaseRespose = {
              email: promise.data.email,
              password: promise.data.password,
            })
        )
        .then(() => {
          if (
            canWeLogIn.status === 200 &&
            canWeLogIn.ok === true &&
            databaseRespose.password === this.state.currentLogin.password &&
            databaseRespose.email === this.state.currentLogin.email
          ) {
            //Login was successful
            this.setState({
              snackDiv: (
                <Snackbar
                  open={true}
                  autoHideDuration={2000}
                  onClose={this.handleClose}
                >
                  <Alert onClose={this.handleClose} severity="success">
                    You're now signed in
                  </Alert>
                </Snackbar>
              ),
            });
          } else {
            //Login was unsuccessful
            this.setState({
              snackDiv: (
                <Snackbar
                  open={true}
                  autoHideDuration={2000}
                  onClose={this.errorSnack}
                >
                  <Alert onClose={this.errorSnack} severity="error">
                    Login was unsuccessful do you need to sign up?
                  </Alert>
                </Snackbar>
              ),
            });
          }
        });
    });
  };
  showCheckingSnack = () => {
    this.setState({
      snackDiv: (
        <Snackbar open={true} autoHideDuration={2000}>
          <Alert severity="info">Checking your login</Alert>
        </Snackbar>
      ),
    });
  };
  handleClose = () => {
    this.setState({ snackDiv: <div></div> });
    this.props.loginSuccess();
  };
  errorSnack = () => {
    this.setState({ snackDiv: <div></div>, offerSignup: true });
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
          id="outlined-required"
          label="Password"
          type="password"
          variant="outlined"
          onChange={this.getPassword}
        />
        <Button onClick={(e) => this.attemptLogin()}> Log In</Button>
        {this.state.offerSignup ? (
          <div style={{ textAlign: "center" }}>
            <p>
              Do you need to
              <span
                onClick={this.props.signupSelected}
                className="style-option"
              >
                {" "}
                sign up?
              </span>
            </p>
          </div>
        ) : null}
        {this.state.snackDiv}
      </div>
    );
  }
}
