import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./contact.css";
import { from, Observable, of } from "rxjs";
export class contact extends Component {
  state = {
    userEmail: "",
    userName: "",
    userMessage: "",
    emailSent: false,
  };

  onSubmit = () => {
    let emailAnswer = from(
      fetch("https://www.twsprogramming.com/.netlify/functions/sendContact", {
        body: JSON.stringify({
          name: this.state.userName,
          email: this.state.userEmail,
          message: this.state.userMessage,
        }),
        method: "POST",
      })
    );
    emailAnswer.subscribe((result) => {
      this.setState({ emailSent: true });
    });
  };
  setValue = (e: any, value: string) => {
    this.setState({ value: e.target.value });
    console.log(this.state.userEmail);
    console.log(this.state.userName);
  };
  render() {
    let contactCurrent = this.state.emailSent ? (
      <div className="contact-container">
        <h3>Thank you for contacting me expect a response soon. </h3>
      </div>
    ) : (
      <div className="contact-container">
        <h3>Can't wait to hear from you</h3>
        <div className="inputs">
          <TextField
            id="contact-name"
            label="Your Name"
            type="search"
            variant="outlined"
            onChange={(e) => this.setValue(e, "userName")}
          />
          <TextField
            id="contact-email"
            label="Your Email"
            type="search"
            variant="outlined"
            onChange={(e) => this.setValue(e, "userEmail")}
          />
          <TextField
            id="outlined-search"
            label="Your Message"
            type="search"
            variant="outlined"
            multiline
            rows={3}
            onChange={(e) => this.setValue(e, "userMessage")}
          />
        </div>
      </div>
    );
    return <div className="contact-section">{contactCurrent}</div>;
  }
}

export default contact;
