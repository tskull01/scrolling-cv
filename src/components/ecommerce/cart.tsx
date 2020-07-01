import React, { Component } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import "./cart.css";
import Item from "./item";
import Button from "@material-ui/core/Button";

interface ICartProps {
  currentCart: Item[];
  checkoutFunc: () => void;
}

export class cart extends Component<ICartProps> {
  state = {
    currentCart: this.props.currentCart,
  };

  removeFromCart = (item: Item, i: number) => {
    console.log(i);
    if (i === 0) {
    }
    this.setState({ currentCart: this.state.currentCart.splice(i, 1) });
  };

  render() {
    let cartContents = this.props.currentCart.map((item, i) => (
      <div className="cart-item" key={i}>
        <img src={item.images[0]} alt="model photo" />
        <h4>{item.name.toUpperCase()}</h4>
        <div onClick={(e) => this.removeFromCart(item, i)}>
          <RemoveIcon></RemoveIcon>
        </div>
      </div>
    ));
    console.log(this.props.currentCart);
    return (
      <div className="cart-view">
        <h4>{`You have ${this.props.currentCart.length} pairs of shoes in your cart`}</h4>
        <div className="cart-flex">{cartContents} </div>
        <Button onClick={this.props.checkoutFunc}>checkout</Button>
      </div>
    );
  }
}

export default cart;
