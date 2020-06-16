import React, { Component } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton, { IconButtonTypeMap } from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "./ecommerce.css";
import Cart from "./cart";
import Productmain from "./productmain";
import Productview from "./productview";
import Item from "./item";
import alphacross1 from "./../../images/alphacross/alphacross-black.jpg";
import alphacross2 from "./../../images/alphacross/alphacross-blue.jpg";
import alphacross3 from "./../../images/alphacross/alphacross-white.jpg";
import speedcross1 from "./../../images/speedcross/speedcross-black.jpg";
import speedcross2 from "./../../images/speedcross/speedcross-green.jpg";
import speedcross3 from "./../../images/speedcross/speedcross-red.jpg";
import senseride1 from "./../../images/sense-ride/sense-ride-black.jpg";
import senseride2 from "./../../images/sense-ride/sense-ride-blue.jpg";
import senseride3 from "./../../images/sense-ride/sense-ride-pearl.jpg";
import supercross1 from "./../../images/supercross/supercross-blue.jpg";
import supercross2 from "./../../images/supercross/supercross-green.jpg";
import supercross3 from "./../../images/supercross/supercross-grey.jpg";
import ultrapro1 from "./../../images/ultra-pro/ultra-pro-bluestone.jpg";
import ultrapro2 from "./../../images/ultra-pro/ultra-pro-ocean.jpg";
import ultrapro3 from "./../../images/ultra-pro/ultra-pro-orange.jpg";
import xapro1 from "./../../images/xa-pro/xa-pro-black.jpg";
import xapro2 from "./../../images/xa-pro/xa-pro-blue.jpg";
import xapro3 from "./../../images/xa-pro/xa-pro-orange.jpg";

interface IComProps {}

interface IComState {
  cartOpen: boolean;
  currentView: boolean;
  items: Item[];
  selectedItem: Item;
  currentCart: string[];
}

export class Ecommerce extends Component<IComProps, IComState> {
  state = {
    cartOpen: false,
    currentView: true,
    items: [
      new Item("alphacross", [alphacross1, alphacross2, alphacross3]),
      new Item("senseride", [senseride1, senseride2, senseride3]),
      new Item("speedcross", [speedcross1, speedcross2, speedcross3]),
      new Item("supercross", [supercross1, supercross2, supercross3]),
      new Item("ultrapro", [ultrapro1, ultrapro2, ultrapro3]),
      new Item("xapro", [xapro1, xapro2, xapro3]),
    ],

    selectedItem: { name: "", images: [] },
    currentCart: new Array(),
  };
  //
  openCart = (e: any) => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  selectItem = (e: any, item: Item) => {
    this.setState({ currentView: false, selectedItem: item });
  };
  addToCart = (str: string) => {
    this.setState({ currentCart: [...this.state.currentCart, str] });
  };
  returnView = () => {
    this.setState({ currentView: !this.state.currentView });
  };
  //Style Functions
  cartStyle = () => {
    if (this.state.cartOpen) {
      return {
        display: "grid",
        gridTemplateColumns: "70vw 30vw",
      };
    } else {
      return {
        display: "grid",
        gridTemplateColumns: "100vw",
      };
    }
  };
  hideCartStyle = () => {
    if (this.state.cartOpen) {
      return {
        color: "black",
      };
    } else {
      return {
        display: "none",
      };
    }
  };

  render() {
    let currentDisplay = this.state.currentView ? (
      <Productmain selectedItem={this.selectItem} items={this.state.items} />
    ) : (
      <Productview
        addToCart={this.addToCart}
        selectedItem={this.state.selectedItem}
        returnView={this.returnView}
      />
    );
    return (
      <div className="eco">
        <div className="edesc">
          <h2>This could be an eCommerce interface . . .</h2>
        </div>
        <div className="ecommerce">
          <nav className="navgrid">
            <IconButton
              onClick={this.returnView}
              className={this.state.currentView ? "invis" : "vis"}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <div></div>
            <IconButton id="cart" onClick={this.openCart}>
              <AddShoppingCartIcon />
            </IconButton>
          </nav>
          <div className="itemlayout" style={this.cartStyle()}>
            {currentDisplay}
            <div style={this.hideCartStyle()}>
              <Cart currentCart={this.state.currentCart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ecommerce;
