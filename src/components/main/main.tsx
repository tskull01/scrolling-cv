import React, { Component, useRef } from "react";
import Intro from "../intro/intro";
import Ecommerce from "../ecommerce/ecommerce";
import Cms from "../cms";
import Mobileui from "../mobileui";
import Email from "../email";
import Skills from "../skills";
import Contact from "../contact";
import "./main.css";
import { gsap } from "gsap";
export class Main extends Component {
  componentDidMount() {
    if (window.screen.width > 601) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".section");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + document.querySelector(".container")?.scrollWidth,
        },
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <Intro />
        </div>
        <div className="section">
          <Ecommerce />
        </div>
        <div className="section">
          <Cms />
        </div>
        <div className="section">
          <Mobileui />
        </div>
        <div className="section">
          <Email />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section last">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Main;
