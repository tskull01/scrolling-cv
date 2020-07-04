import React, { Component, useRef, createRef } from "react";
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
import { fromEvent } from "rxjs";

export class Main extends Component {
  state = {
    textVisible: [
      {
        originalLeft: 0,
        originalRight: 0,
        value: window.screen.width > 601 ? false : true,
      },
      {
        originalLeft: 0,
        originalRight: 0,
        value: window.screen.width > 601 ? false : true,
      },
      {
        originalLeft: 0,
        originalRight: 0,
        value: window.screen.width > 601 ? false : true,
      },
      {
        originalLeft: 0,
        originalRight: 0,
        value: window.screen.width > 601 ? false : true,
      },
      {
        originalLeft: 0,
        originalRight: 0,
        value: window.screen.width > 601 ? false : true,
      },
      {
        originalLeft: 0,
        originalRight: 0,
        value: window.screen.width > 601 ? false : true,
      },
    ],
    containerRef: createRef<HTMLDivElement>(),
    rerender: false,
    scriptsLoaded: false,
  };
  componentDidMount() {
    window.addEventListener("DOMContentLoaded", (event) => {
      this.setState({ scriptsLoaded: true });
    });
    if (window.screen.width > 601) {
      console.log("desktop");
      window.addEventListener("resize", this.handleResize);
      gsap.registerPlugin(ScrollTrigger);
      let sections: Element[] = gsap.utils.toArray(".section");
      let container = document.getElementById("container");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1) - 10,
        ease: "none",
        scrollTrigger: {
          trigger: container ? container : undefined,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + document.querySelector(".container")?.scrollWidth,
        },
      });
      let textSections: Element[] = gsap.utils.toArray(".text-section");
      //Setting original scroll positions
      let setSections = textSections.map((element, i) =>
        this.setOriginalScrollPosition(element, i)
      );
      this.setState({ textVisible: setSections });
      if (container) {
        let scrollSub = fromEvent(window, "scroll").subscribe((scroll) => {
          textSections.forEach((element, i) => {
            if (
              window.scrollY > this.state.textVisible[i].originalLeft - 50 &&
              window.scrollY < this.state.textVisible[i].originalRight
            ) {
              if (!this.state.textVisible[i].value) {
                let arrayCopy = [...this.state.textVisible];
                let arrayItem = { ...arrayCopy[i] };
                arrayItem.value = true;
                arrayCopy[i] = arrayItem;
                this.setState({ textVisible: arrayCopy });
              }
            } else {
            }
          });
        });
      }
    } else {
      //mobile layout no animation
    }
  }
  handleResize = () => {
    //Resizes container on screen resize
    console.log("resize");
    this.setState({ rerender: !this.state.rerender });
  };
  setOriginalScrollPosition = (element: Element, index: number) => {
    let arrayCopy = [...this.state.textVisible];
    let arrayItem = { ...arrayCopy[index] };
    arrayItem.originalLeft = element.getBoundingClientRect().left;
    arrayItem.originalRight = element.getBoundingClientRect().right;
    return arrayItem;
  };
  render() {
    return (
      <div className="container" ref={this.state.containerRef} id="container">
        {" "}
        <div className="section">
          <Intro />
        </div>
        <div className="section text-section">
          {this.state.textVisible[0].value ? (
            <Scrollingtext text="User interfaces can communicate with a dataset and expose functionality to the user. This includes searching the dataset, adding to the data, and editing the data." />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section text-section">
          {this.state.textVisible[1].value ? (
            <Scrollingtext text="This can be applied in a multitude of ways, but this example uses a Google API to offer location options. The user selection is then converted into a set of longitude and latitude. That location set is used by another API with trail information to query and display the data. " />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section">
          {this.state.scriptsLoaded ? (
            <Trailfinder />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section text-section">
          {this.state.textVisible[2].value ? (
            <Scrollingtext text="Front-end engineers are also responsible for implementing any type of eCommerce function. This includes the browsing and checkout functions. This functionality can be applied to any application like restaurant orders, product purchases, or registering for events. " />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section text-section">
          {this.state.textVisible[3].value ? (
            <Scrollingtext text="The example shows a simple eCommerce interface before the checkout process. This same precheckout process can be applied to any product or service." />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section shortened-section">
          <Ecommerce />
        </div>
        <div className="section text-section">
          {this.state.textVisible[4].value ? (
            <Scrollingtext text="Restricted access to content on the web is only becoming more important. Having an authentication and user profile system is essential to monetizing content on the web." />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section text-section">
          {this.state.textVisible[5].value ? (
            <Scrollingtext text="This example shows a blog that restricts access to content until after the user has signed in. This model is essential for anyone being paid for content like streaming services, print publications, and individual content creators. " />
          ) : (
            <div style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>
        <div className="section gap-top">
          <Blogmain />
        </div>
        <div className="section shortened-section">
          <Skills />
        </div>
        <div className="section shortened-section">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Main;
