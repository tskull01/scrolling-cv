import React, { Component } from "react";
import { gsap } from "gsap";
import reactLogo from "../../images/skills/react.png";
import angularLogo from "../../images/skills/angular.png";
import rxjsLogo from "../../images/skills/rxjs.png";
import eS6Logo from "../../images/skills/es6.png";
import "./skills.css";
export class skills extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="dev-container">
        <h3> I build each interface using the latest web technologies </h3>
        <div className="logos">
          <img src={reactLogo} alt="" />
          <img src={angularLogo} alt="" />
          <img src={rxjsLogo} alt="" />
          <img src={eS6Logo} alt="" />
        </div>
      </div>
    );
  }
}

export default skills;
