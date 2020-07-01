import React, { Component } from "react";
import "./scrollingtext.css";
interface ITextProps {
  text: string;
}
export default class scrollingtext extends Component<ITextProps> {
  state = {
    currentText: true,
  };

  render() {
    return (
      <div className="text-container">
        <div className="current-text">
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}
