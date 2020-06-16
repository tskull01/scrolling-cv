import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./intro.css";
class intro extends Component {
  render() {
    return (
      <div className="intro-container">
        <div className="intro-text">
          <div></div>
          <div className="grid-center">
            <h3>
              As a frontend engineer I build complex user interfaces
              {window.screen.width > 800 ? <br /> : console.log("")}
              that are responsive to any viewport.
            </h3>
          </div>
        </div>
        <div className="intro-grid">
          <img src="http://placecorgi.com/400/400" />
          <div className="grid-center justify">
            <GitHubIcon />{" "}
          </div>
          <div className="grid-center">
            <h3>
              <a href="github.com/tskull01">github.com/tskull01</a>
            </h3>
          </div>
        </div>
        <div className="intro-grid">
          <div></div>
          <div className="grid-center justify">
            <EmailIcon />{" "}
          </div>
          <div>
            <h3 className="grid-center">
              <a href="mailto:tskulley31@yahoo.com">github.com/tskull01</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default intro;
