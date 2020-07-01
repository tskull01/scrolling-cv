import React, { Component, useRef } from "react";
import Intro from "../intro/intro";
import Ecommerce from "../ecommerce/ecommerce";
import Blogmain from "../blogauth/blogmain";
import Trailfinder from "../trailfinder/trailfinder";
import Scrollingtext from "../scrollingtext/scrollingtext";
import Skills from "../skills/skills";
import Contact from "../contact";
import "./main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        <div className="section text-section">
          <Scrollingtext text="Testing section 1" />
        </div>
        <div className="section text-section">
          <Scrollingtext text="Testing section 2" />
        </div>
        <div className="section">
          <Trailfinder />
        </div>
        <div className="section text-section">
          <Scrollingtext text="" />
        </div>
        <div className="section text-section">
          <Scrollingtext text="" />
        </div>
        <div className="section">
          <Ecommerce />
        </div>
        <div className="section text-section">
          <Scrollingtext text="" />
        </div>
        <div className="section text-section">
          <Scrollingtext text="" />
        </div>
        <div className="section gap-top">
          <Blogmain />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Main;
