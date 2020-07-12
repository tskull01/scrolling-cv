import React, { Component } from "react";
import "./blog.css";
import Blogs from "./blogcontent";
import Blog from "./blog";
import Button from "@material-ui/core/Button";

interface IBlogProps {
  selectBlog: (blog: Blog) => void;
}

export default class blogfull extends Component<IBlogProps> {
  render() {
    let currentView =
      window.screen.width > 600 ? (
        //Desktop
        <div className="blog-flex">
          {Blogs.map((blog) => (
            <div key={blog.title} className="blog-inner">
              <div className="blog-top">
                <div className="title-flex">
                  <h3>{blog.title}</h3>
                  <h5>{blog.description}</h5>
                </div>
                <div className="button-flex">
                  <Button
                    style={{ backgroundColor: "#f5f5f5" }}
                    onClick={() => this.props.selectBlog(blog)}
                  >
                    read the article
                  </Button>
                </div>
              </div>
              <div className="blog-bottom">
                <img
                  src={`${blog.imageSrc}?nf_resize=fit&w=800`}
                  alt=""
                  className="blog-image"
                />
                <p style={{ margin: "1vw" }}>{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        //Mobile
        <div className="blog-flex">
          {Blogs.map((blog) => (
            <div className="blog-inner" key={blog.title}>
              <div className="blog-top">
                <div className="blog-title">
                  <h3>{blog.title}</h3>
                </div>
                <div className="button-flex">
                  <Button
                    style={{ backgroundColor: "#f5f5f5" }}
                    onClick={() => this.props.selectBlog(blog)}
                  >
                    read the article
                  </Button>
                </div>
              </div>
              <div className="blog-bottom">
                <img
                  src={`${blog.imageSrc}?nf_resize=fit&w=600`}
                  alt=""
                  className="blog-image"
                />
                <p style={{ margin: "1vw" }}>{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      );
    return <div>{currentView}</div>;
  }
}
