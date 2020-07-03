import React, { Component, createRef } from "react";
import { gsap } from "gsap";
import reactLogo from "../../images/skills/react.png";
import angularLogo from "../../images/skills/angular.png";
import rxjsLogo from "../../images/skills/rxjs.png";
import eS6Logo from "../../images/skills/es6.png";
import "./skills.css";
import { fromEvent } from "rxjs";
export class skills extends Component {
  state = {
    containerRef: createRef<HTMLDivElement>(),
    originalLeft: 0,
    animatedIn: false,
  };
  componentDidMount() {
    if (window.screen.width > 601) {
      if (this.state.originalLeft === 0) {
        this.setState({
          originalLeft: this.state.containerRef.current?.getBoundingClientRect()
            .left,
        });
      }
      let scrollSub = fromEvent(window, "scroll").subscribe((scroll) => {
        if (
          window.scrollY > this.state.originalLeft + 200 &&
          !this.state.animatedIn
        ) {
          console.log("STARTED");
          let timeline = gsap
            .timeline()
            .fromTo(
              ".logo-one",
              {
                opacity: 0,
                xPercent: -25,
              },
              {
                opacity: 1,
                duration: 1,
              }
            )
            .fromTo(
              ".logo-two",
              {
                opacity: 0,
                xPercent: -25,
              },
              {
                opacity: 1,
                duration: 1,
              }
            )
            .fromTo(
              ".logo-three",
              {
                opacity: 0,
                xPercent: -25,
              },
              {
                opacity: 1,
                duration: 1,
              }
            )
            .fromTo(
              ".logo-four",
              {
                opacity: 0,
                xPercent: -25,
              },
              {
                opacity: 1,
                duration: 1,
              }
            );
          timeline.play();
          this.setState({ animatedIn: true });
        }
      });
    }
  }
  render() {
    let logos =
      window.screen.width > 601 ? (
        <div className="logos">
          <img src={reactLogo} alt="" className="logo-one" />
          <img src={angularLogo} alt="" className="logo-two" />
          <img src={rxjsLogo} alt="" className="logo-three" />
          <img src={eS6Logo} alt="" className="logo-four" />
        </div>
      ) : (
        <div className="logos">
          <div className="inner-logos">
            <img src={reactLogo} alt="" className="logo-one" />
            <img src={angularLogo} alt="" className="logo-two" />
          </div>
          <div className="inner-logos">
            <img src={rxjsLogo} alt="" className="logo-three" />
            <img src={eS6Logo} alt="" className="logo-four" />
          </div>
        </div>
      );
    return (
      <div className="dev-container" ref={this.state.containerRef}>
        <h3> I build each interface using the latest web technologies </h3>
        {logos}
      </div>
    );
  }
}

export default skills;
