import React, { Component, createRef, RefObject, Ref, useRef } from "react";
import Blogs from "./blogcontent";
import Blog from "./blog";
import "./blog.css";
import Placeholder from "../../images/placeholder_16_9.png";
import { gsap } from "gsap";
import { fromEvent, Observable } from "rxjs";

interface IViewProps {
  selectedBlog: Blog;
  showContent: boolean;
  loginSelected: () => void;
  signupSelected: () => void;
}
export default class blogview extends Component<IViewProps> {
  state = {
    imgLoaded: false,
  };
  imgLoaded = () => {
    this.setState({ imgLoaded: true });
    let placeholder = document.getElementById("placeholder");
    if (placeholder) {
      placeholder.style.display = "none";
    }
    gsap.to(".article-img", {
      opacity: 1,
      duration: 0.75,
    });
  };
  componentDidMount() {
    document.getElementById("article-view")?.scrollTo(0, 0);
  }
  imgLoadEvent = () => {
    let imgRef = document.getElementsByClassName("article-img")[0];
    if (imgRef) {
      let imgSub = fromEvent(imgRef, "load").subscribe((loaded: any) => {
        this.imgLoaded();
      });
    } else {
      console.log("image ref null");
    }
  };
  render() {
    let {
      title,
      author,
      content,
      datePublished,
      imageSrc,
      url,
      summary,
    } = this.props.selectedBlog;
    return (
      <div className="article-view" id="article-view">
        <h3>{title}</h3>
        <h6>
          {author} | {datePublished}
        </h6>
        <h5>{summary}</h5>
        <div className="article-grid">
          {this.state.imgLoaded ? (
            <img
              src={imageSrc}
              className="article-img"
              onLoad={this.imgLoaded}
              id="article-img"
              style={{ display: "block" }}
            ></img>
          ) : (
            <div>
              <img
                src={imageSrc}
                className="article-img"
                onLoad={this.imgLoaded}
                id="article-img"
                style={{ display: "none" }}
              ></img>
              <img
                src={Placeholder}
                onLoad={this.imgLoadEvent}
                id="placeholder"
              />
            </div>
          )}

          {this.props.showContent ? (
            <p className="article-content">
              {content} <br /> <br />
              <span style={{ fontWeight: 500, margin: "1vh" }}>
                I only used these articles as content I did not write any of
                them if you would like to continue reading this story{" "}
                <a href={url}>{url}</a>
              </span>
              <br /> <br />
              <span style={{ fontWeight: 600, margin: "1vh" }}>
                Return to last page by clicking the Midwest Trail Running text
                at the top
              </span>
            </p>
          ) : (
            <p
              className="article-content"
              style={
                this.props.showContent
                  ? { display: "block" }
                  : { display: "inline-block" }
              }
            >
              {" "}
              Please <a onClick={this.props.loginSelected}> login </a> or{" "}
              <a onClick={this.props.signupSelected}> sign up </a> to view
              article
            </p>
          )}
        </div>
      </div>
    );
  }
}
