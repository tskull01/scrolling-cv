import React, { Component } from "react";
import { TrailObject } from "./trailfinder";
import "./trailfinder.css";
import Chip from "@material-ui/core/Chip";
import trailDefault from "../../images/trail_default.jpg";
import { gsap } from "gsap";

interface ITrailProps {
  trails: TrailObject[];
}
export default class trail extends Component<ITrailProps> {
  state = {
    imagesLoading: true,
  };
  componentDidMount() {
    gsap.from(".trail-item", {
      duration: 1.3,
      opacity: 0,
      yPercent: -10,
      ease: "linear",
    });
  }
  fadeIn = (i: number) => {
    if (i === this.props.trails.length - 1) {
      console.log("all images loaded");
      gsap.from(".trail-imgs", {
        duration: 0.9,
        opacity: 0,
        ease: "linear",
      });
    }
  };

  render() {
    let trailInfo =
      this.props.trails.length < 1
        ? null
        : this.props.trails.map((trail: any, i: number) => (
            <div className="trail-item" key={trail.name}>
              <div>
                <img
                  src={trail.imageSrc !== "" ? trail.imageSrc : trailDefault}
                  alt=""
                  onLoad={(e) => this.fadeIn(i)}
                  className="trail-imgs"
                />
              </div>
              <div className="trail-detail">
                <h4 className="trail-name">
                  {trail.name} - {trail.location}
                </h4>
                <p className="trail-summary">{trail.summary}</p>
                {trail.type === "Recommended Route" ? (
                  <Chip label="Recommended Route" variant="outlined" />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ));
    return <div className="result-flex">{trailInfo}</div>;
  }
}
