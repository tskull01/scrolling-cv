import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./contact.css";
import { from, Observable, of } from "rxjs";
import Button from "@material-ui/core/Button";

export class contact extends Component {
  state = {
    userEmail: "",
    userName: "",
    userMessage: "",
    emailSent: false,
  };

  sendContact = () => {
    console.log(this.state.userName);
    console.log(this.state.userEmail);

    let emailAnswer = from(
      fetch("https://www.twsprogramming.com/.netlify/functions/sendContact", {
        //PROD ADDRESS https://www.twsprogramming.com/.netlify/functions/sendContact
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
  setValue = (e: any, property: string) => {
    switch (property) {
      case "name":
        this.setState({ userName: e.target.value });
        break;
      case "email":
        this.setState({ userEmail: e.target.value });
        break;
      case "message":
        this.setState({ userMessage: e.target.value });
        break;
    }
    this.setState({ property: e.target.value });
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
            fullWidth={true}
            type="search"
            variant="outlined"
            onChange={(e) => this.setValue(e, "name")}
          />
          <TextField
            id="contact-email"
            label="Your Email"
            type="search"
            fullWidth={true}
            variant="outlined"
            onChange={(e) => this.setValue(e, "email")}
          />
          <TextField
            id="outlined-search"
            label="Your Message"
            type="search"
            variant="outlined"
            fullWidth={true}
            multiline
            rows={3}
            onChange={(e) => this.setValue(e, "message")}
          />
        </div>
        <div className="contact-button">
          <Button
            onClick={this.sendContact}
            style={{ backgroundColor: "#f5f5f5" }}
          >
            Send Message
          </Button>
        </div>
      </div>
    );
    return <div className="contact-section">{contactCurrent}</div>;
  }
}

export default contact;
