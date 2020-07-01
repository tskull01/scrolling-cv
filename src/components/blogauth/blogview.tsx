import React, { Component } from "react";
import Blogs from "./blogcontent";
import Blog from "./blog";
import "./blog.css";
interface IViewProps {
  selectedBlog: Blog;
  showContent: boolean;
  loginSelected: () => void;
  signupSelected: () => void;
}
export default class blogview extends Component<IViewProps> {
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
      <div className="article-view">
        <h3>{title}</h3>
        <h6>
          {author} | {datePublished}
        </h6>
        <h5>{summary}</h5>
        <div className="article-grid">
          <img src={imageSrc}></img>
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
