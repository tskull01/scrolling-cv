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
  componentDidUpdate() {
    gsap.from(".result-item", {
      duration: 1.3,
      y: "-30vw",
      opacity: 0,
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
      this.props.trails.length < 1 ? (
        <h5 style={{ alignSelf: "center" }}>No results found</h5>
      ) : (
        this.props.trails.map((trail: any, i: number) => (
          <div className="result-item" key={trail.name}>
            <img
              src={trail.imageSrc !== "" ? trail.imageSrc : trailDefault}
              alt=""
              onLoad={(e) => this.fadeIn(i)}
              className="trail-imgs"
            />
            <div className="trail-detail">
              <h4>
                {trail.name} - {trail.location}
              </h4>
              <p>{trail.summary}</p>
              {trail.type === "Recommended Route" ? (
                <Chip label="Recommended Route" variant="outlined" />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))
      );
    console.log(this.props.trails);
    return <div className="result-flex">{trailInfo}</div>;
  }
}
