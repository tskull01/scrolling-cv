import React, { Component } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
interface ICartProps {
  currentCart: string[];
}

export class cart extends Component<ICartProps> {
  state = {
    currentCart: this.props.currentCart,
  };

  removeFromCart = (e: any, item: string, i: number) => {
    this.setState({ currentCart: this.state.currentCart.splice(i, 1) });
  };

  render() {
    let cartContents = this.props.currentCart.map((item, i) => (
      <div className="cart-item" key={i}>
        <h4>{item}</h4>
        <div onClick={(e) => this.removeFromCart(e, item, i)}>
          <RemoveIcon></RemoveIcon>
        </div>
      </div>
    ));
    console.log(this.props.currentCart);
    return <div className="cart-view"> {cartContents} </div>;
  }
}

export default cart;
