import React, { Component, createRef } from "react";
import "./scrollingtext.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
interface ITextProps {
  text: string;
  id: number;
}
export default class scrollingtext extends Component<ITextProps> {
  state: any = {
    currentText: true,
    containerRef: createRef<HTMLDivElement>(),
    id: this.props.id,
  };
  componentDidMount() {
    gsap.registerPlugin(ScrollTrigger);
  }
  componentDidUpdate() {
    if (window.screenX > this.state.containerRef.current)
      gsap.from(".current-text", {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: `#trigger${this.state.id}`,
        },
      });
  }

  render() {
    return (
      <div className="text-container" ref={this.state.containerRef}>
        <div className="current-text" id={`trigger${this.state.id}`}>
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}
