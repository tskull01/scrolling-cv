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
          <div className="intro-center">
            <h3>
              As a frontend engineer I build complex user interfaces that are
              responsive to any viewport.
            </h3>
          </div>
        </div>
        <div className="intro-grid">
          <img src="http://placecorgi.com/400/400" />
          <div className="icon-adjust">
            <div className="git-flex">
              <GitHubIcon />
              <h3>
                <a href="https://www.github.com/tskull01">
                  github.com/tskull01
                </a>
              </h3>
            </div>
            <div className="git-flex">
              <EmailIcon />{" "}
              <h4>
                <a href="mailto:skulley.tyler@gmail.com">
                  skulley.tyler@gmail.com
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default intro;
