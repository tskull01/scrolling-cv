import React, { Component, createRef } from "react";
import Login from "./login";
import "./blog.css";
import Button from "@material-ui/core/Button";
import Blogfull from "./blogfull";
import Blogview from "./blogview";
import Loginform from "./loginform";
import Signup from "./signup";
import Blog from "./blog";
import { from, Observable, of } from "rxjs";

export default class blogmain extends Component {
  state = {
    loggedin: false,
    articlesToView: 1,
    currentView: { prev: 0, current: 0 },
    loginbarDisplay: true,
    currentBlog: new Blog("", "", "", "", "", "", "", ""),
    showContent: true,
    blogRef: createRef<HTMLDivElement>(),
  };
  returnView = () => {
    this.state.blogRef.current?.scrollTo(0, 0);
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 0 },
    });
  };
  loginSelected = () => {
    this.state.blogRef.current?.scrollTo(0, 0);
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 2 },
    });
  };
  signupSelected = () => {
    this.state.blogRef.current?.scroll(0, 0);
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 3 },
    });
  };
  signupSubmit = (newLogin: Login) => {
    console.log(newLogin, "signup submit");
    //add new signup info to the database and logged in goes to true
    let response = this.createLogin(newLogin);
    response.subscribe((response) => {
      response.ok ? this.loginSuccess() : console.log("Signup failed");
    });
    let emailResponse = this.sendEmail(newLogin.email);
  };
  loginSuccess = () => {
    this.state.blogRef.current?.scrollTo(0, 0);
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 0 },
      loggedin: true,
      loginbarDisplay: false,
    });
  };
  createLogin = (newLogin: Login) => {
    //Create the login if successful change login status and send them to the last view
    let signupComplete = from(
      fetch("/.netlify/functions/addLogin", {
        body: JSON.stringify(newLogin),
        method: "POST",
      })
    );
    return signupComplete;
  };
  checkLogin = (attemptedLogin: Login): Observable<any> => {
    //query database for login info
    let loginAnswer = from(
      fetch("/.netlify/functions/checkLogin", {
        body: JSON.stringify({
          email: attemptedLogin.email,
          password: attemptedLogin.password,
        }),
        method: "POST",
      })
    );
    return loginAnswer;
  };
  sendEmail = (email: string): Observable<any> => {
    //query database for login info
    let emailAnswer = from(
      fetch("/.netlify/functions/sendEmail", {
        body: JSON.stringify({
          email: email,
        }),
        method: "POST",
      })
    );
    return emailAnswer;
  };
  getCurrentDisplay = () => {
    switch (this.state.currentView.current) {
      case 0:
        return (
          <div>
            <Blogfull selectBlog={this.selectBlog} />
          </div>
        );
      case 1:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <Blogview
              selectedBlog={this.state.currentBlog}
              showContent={this.state.showContent}
              loginSelected={this.loginSelected}
              signupSelected={this.signupSelected}
            />
          </div>
        );
      case 2:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <Loginform
              checkLogin={this.checkLogin}
              loginSuccess={this.loginSuccess}
              signupSelected={this.signupSelected}
            />
          </div>
        );
      case 3:
        return (
          <div style={{ width: "100%", height: "100%" }}>
            <Signup signupSubmit={this.signupSubmit} />
          </div>
        );
    }
  };
  selectBlog = (blog: Blog) => {
    console.log("blog selected");
    this.setState({ currentBlog: blog, currentView: { prev: 0, current: 1 } });
    if (this.state.loggedin) {
      this.setState({ showContent: true });
    } else if (this.state.articlesToView > 0) {
      this.setState({
        articlesToView: this.state.articlesToView - 1,
        showContent: true,
      });
    } else if (!this.state.loggedin || this.state.articlesToView === 0) {
      this.setState({ showContent: false });
    }
  };
  render() {
    let subscribeHeader = this.state.loginbarDisplay ? (
      <div className="info-bar">
        <div style={{ marginLeft: "1vw" }}>
          <h3 onClick={this.returnView} style={{ cursor: "pointer" }}>
            Midwest Trail Running
          </h3>
          <h5>You have {this.state.articlesToView} free articles remaining</h5>
        </div>
        <div>
          <Button onClick={this.loginSelected}>Login</Button>
          <Button onClick={this.signupSelected}>Sign Up</Button>
        </div>
      </div>
    ) : (
      <div onClick={this.returnView} className="info-bar">
        <div style={{ marginLeft: "1vw" }}>
          <h3>Midwest Trail Running</h3>
        </div>
      </div>
    );

    let currentDisplay = this.getCurrentDisplay();
    return (
      <div className="blog-container">
        {subscribeHeader}
        <div className="blog-display" ref={this.state.blogRef}>
          {currentDisplay}
        </div>
      </div>
    );
  }
}
