import React, { Component, useRef } from "react";
import Intro from "../intro/intro";
import Ecommerce from "../ecommerce/ecommerce";
import Blogmain from "../blogauth/blogmain";
import Trailfinder from "../trailfinder/trailfinder";
import Scrollingtext from "../scrollingtext/scrollingtext";
import Skills from "../skills/skills";
import Contact from "../contact/contact";
import "./main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { from, Observable, of } from "rxjs";

export class Main extends Component {
  componentDidMount() {
    if (window.screen.width > 601) {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".section");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1) - 50,
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
  testEmail = () => {
    let email = "tskulley29@yahoo.com";
    let emailAnswer = from(
      fetch("/.netlify/functions/sendEmail", {
        body: JSON.stringify({
          email: email,
        }),
        method: "POST",
      })
    );
    emailAnswer.subscribe((answer) => console.log(answer));
    return emailAnswer;
  };
  render() {
    return (
      <div className="container">
        <div className="section">
          <Intro />
        </div>
        <div className="section text-section">
          <Scrollingtext text="User interfaces can communicate with a dataset and expose functionality to the user. This includes searching the data, adding to the data, and editing the data." />
        </div>
        <div className="section text-section">
          <Scrollingtext text="This can be applied in a multitude of ways but this one uses a Google API to offer location options and then convert those options into a set of longitude and latitude. That location set is used by another API with trail information to query and display the data. " />
        </div>
        <div className="section">
          <Trailfinder />
        </div>
        <div className="section text-section">
          <Scrollingtext text="Front end engineers are also responsible for implementing any type of eCommerce function. This includes all kinds of functions like restaurant orders, product purchases, or registering for events. " />
        </div>
        <div className="section text-section">
          <Scrollingtext text="The example shows a simple eCommerce interface before the checkout process. This same checkout process can be applied to any product or service." />
        </div>
        <div className="section">
          <Ecommerce />
        </div>
        <div className="section text-section">
          <button onClick={this.testEmail}>Test Email</button>
        </div>
        <div className="section text-section">
          <Scrollingtext text="This example shows a blog that restricts access to content until after the user has signed in. This model is essential for anyone being paid for content like streaming services, print publications, and individual content creators. " />
        </div>
        <div className="section gap-top">
          <Blogmain />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section" style={{ marginRight: "10vw" }}>
          <Contact />
        </div>
      </div>
    );
  }
}

export default Main;
