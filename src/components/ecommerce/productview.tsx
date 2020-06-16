import React, { Component } from "react";
import Item from "./item";
import Button from "@material-ui/core/Button";

interface IViewProps {
  selectedItem: Item;
  addToCart: (name: string) => void;
  returnView: () => void;
}

export default class productview extends Component<IViewProps> {
  render() {
    console.log(this.props.selectedItem.images[0]);
    return (
      <div className="view-container">
        <div className="full-img">
          <img
            src={this.props.selectedItem.images[0]}
            className="center"
            alt=""
          />
        </div>
        <div className="options">
          <div>
            <Button className="center" onClick={this.props.returnView}>
              go back
            </Button>
          </div>
          <div>
            <Button className="center">add to cart</Button>
          </div>
          <div className="img-flex">
            <img src={this.props.selectedItem.images[0]} alt="" />
            <img src={this.props.selectedItem.images[1]} alt="" />
            <img src={this.props.selectedItem.images[2]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
