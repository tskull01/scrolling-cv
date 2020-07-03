import React, { Component, createRef } from "react";
import "./scrollingtext.css";
import { gsap } from "gsap";

interface ITextProps {
  text: string;
}
export default class scrollingtext extends Component<ITextProps> {
  state: any = {
    currentText: true,
    containerRef: createRef<HTMLDivElement>(),
  };
  componentDidMount() {
    if (window.screen.width > 601) {
      gsap.from(this.state.containerRef.current, {
        opacity: 0,
        xPercent: 25,
        duration: 0.5,
      });
    }
  }
  render() {
    return (
      <div className="scroll-container">
        <div className="scroll-text" ref={this.state.containerRef}>
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}
