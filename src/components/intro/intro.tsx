import React, { Component } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "./intro.css";
import myPhoto from "../../images/me.jpg";
import { gsap } from "gsap";
import { fromEvent } from "rxjs";
import Placeholder from "../../images/placeholder_2_3.png";
class intro extends Component {
  state = {
    imgLoaded: false,
  };
  imgLoaded = () => {
    this.setState({ imgLoaded: true });
    let placeholder = document.getElementById("placeholder");
    if (placeholder) {
      placeholder.style.display = "none";
    }
    gsap.to(".intro-photo", {
      opacity: 1,
      duration: 0.75,
    });
  };
  imgLoadEvent = () => {
    let imgRef = document.getElementsByClassName("intro-photo")[0];
    if (imgRef) {
      let imgSub = fromEvent(imgRef, "load").subscribe((loaded: any) => {
        this.imgLoaded();
      });
    } else {
      console.log("image ref null");
    }
  };
  render() {
    {
      let classes = this.state.imgLoaded
        ? "intro-photo"
        : "intro-photo hide-photo ";
    }
    let photoTransform =
      window.screen.width > 601
        ? `/static/media/me.2de7b2c3.jpg?nf_resize=fit&w=900`
        : `/static/media/me.2de7b2c3.jpg?nf_resize=fit&w=600`;
    return (
      <div className="intro-container">
        <div className="intro-text">
          <div></div>
          <div className="intro-center">
            <h3>
              As a front-end engineer I build complex user interfaces that are
              responsive to any viewport.
            </h3>
          </div>
        </div>
        <div className="intro-grid">
          {this.state.imgLoaded ? (
            <img
              src={myPhoto}
              onLoad={this.imgLoaded}
              className="intro-photo "
            />
          ) : (
            <div>
              <img
                src={myPhoto}
                onLoad={this.imgLoaded}
                className="intro-photo "
                style={{ display: "none" }}
              />
              <img
                src={Placeholder}
                onLoad={this.imgLoadEvent}
                id="placeholder"
              />
            </div>
          )}

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
