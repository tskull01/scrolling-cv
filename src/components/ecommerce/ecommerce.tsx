import React, { Component } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import "./ecommerce.css";
import Cart from "./cart";
import Productmain from "./productmain";
import Productview from "./productview";
import Item from "./item";
import alphacross1 from "./../../images/alphacross/alphacross-black.jpg";
import alphacross2 from "./../../images/alphacross/alphacross-blue.jpg";
import alphacross3 from "./../../images/alphacross/alphacross-white.jpg";
import speedcross1 from "./../../images/speedcross/speedcross-red.jpg";
import speedcross2 from "./../../images/speedcross/speedcross-green.jpg";
import speedcross3 from "./../../images/speedcross/speedcross-black.jpg";
import senseride1 from "./../../images/sense-ride/sense-ride-black.jpg";
import senseride2 from "./../../images/sense-ride/sense-ride-blue.jpg";
import senseride3 from "./../../images/sense-ride/sense-ride-pearl.jpg";
import supercross1 from "./../../images/supercross/supercross-blue.jpg";
import supercross2 from "./../../images/supercross/supercross-green.jpg";
import supercross3 from "./../../images/supercross/supercross-grey.jpg";
import ultrapro1 from "./../../images/ultra-pro/ultra-pro-bluestone.jpg";
import ultrapro2 from "./../../images/ultra-pro/ultra-pro-ocean.jpg";
import ultrapro3 from "./../../images/ultra-pro/ultra-pro-orange.jpg";
import xapro1 from "./../../images/xa-pro/xa-pro-orange.jpg";
import xapro2 from "./../../images/xa-pro/xa-pro-blue.jpg";
import xapro3 from "./../../images/xa-pro/xa-pro-black.jpg";
import sensepro1 from "../../images/sense-pro/sense-pro-blue.jpg";
import sensepro2 from "../../images/sense-pro/sense-pro-black.jpg";
import speedgtx1 from "./../../images/speedcross-gtx/speedcross-gtx-blue.jpg";
import speedgtx2 from "./../../images/speedcross-gtx/speedcross-gtx-brick.jpg";
import speedgtx3 from "./../../images/speedcross-gtx/speedcross-gtx-green.jpg";
import xawild1 from "./../../images/xa-wild/xa-wild-olive.jpg";
import xawild2 from "./../../images/xa-wild/xa-wild-black.jpg";
import xawild3 from "./../../images/xa-wild/xa-wild-quiet.jpg";

import { gsap } from "gsap";

interface IComProps {}

interface IComState {
  cartOpen: boolean;
  currentView: { prev: number; current: number };
  items: Item[];
  selectedItem: Item;
  currentCart: Item[];
}

export class Ecommerce extends Component<IComProps, IComState> {
  state = {
    cartOpen: false,
    currentView: { prev: 0, current: 0 },
    items: [
      new Item("alphacross", [alphacross1, alphacross2, alphacross3]),
      new Item("senseride", [senseride1, senseride2, senseride3]),
      new Item("speedcross", [speedcross1, speedcross2, speedcross3]),
      new Item("supercross", [supercross1, supercross2, supercross3]),
      new Item("ultrapro", [ultrapro1, ultrapro2, ultrapro3]),
      new Item("xa pro", [xapro1, xapro2, xapro3]),
      new Item("sensepro", [sensepro1, sensepro2]),
      new Item("speedcross gtx", [speedgtx1, speedgtx2, speedgtx3]),
      new Item("xa wild", [xawild1, xawild2, xawild3]),
    ],

    selectedItem: { name: "", images: [] },
    currentCart: new Array<Item>(),
  };
  //
  openCart = (e: any) => {
    console.log(this.state.currentView);
    if (this.state.cartOpen) {
      this.setState({
        currentView: {
          prev: 2,
          current: this.state.currentView.prev,
        },
        cartOpen: false,
      });
      this.callFadeIn();
    } else {
      this.setState({
        currentView: { prev: this.state.currentView.current, current: 2 },
        cartOpen: true,
      });
      this.callFadeIn();
    }
  };
  selectItem = (e: any, item: Item) => {
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 1 },
      selectedItem: item,
    });
    this.callFadeIn();
  };
  addToCart = () => {
    console.log("adding to cart");
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 0 },
      currentCart: [...this.state.currentCart, this.state.selectedItem],
    });
    this.callFadeIn();
  };
  returnView = () => {
    this.setState({
      currentView: { prev: this.state.currentView.current, current: 0 },
    });
    this.callFadeIn();
  };
  checkoutFunc = () => {
    this.setState({ currentCart: [], currentView: { prev: 2, current: 0 } });
    this.callFadeIn();
  };
  callFadeIn = () => {
    gsap.from(".itemlayout", {
      duration: 0.5,
      opacity: 0,
      ease: "linear",
    });
  };
  //Style Functions
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
  hideBack = () => {
    let backStyle = this.state.currentView
      ? { visibility: "invisible" }
      : { visibility: "visible" };
    return backStyle;
  };

  render() {
    let currentDisplay;
    if (this.state.currentView.current === 0) {
      currentDisplay = (
        <Productmain selectedItem={this.selectItem} items={this.state.items} />
      );
    } else if (this.state.currentView.current === 1) {
      currentDisplay = (
        <Productview
          addToCart={this.addToCart}
          selectedItem={this.state.selectedItem}
          returnView={this.returnView}
        />
      );
    } else if (this.state.currentView.current === 2) {
      currentDisplay = (
        <Cart
          checkoutFunc={this.checkoutFunc}
          currentCart={this.state.currentCart}
        />
      );
    }
    return (
      <div className="eco">
        <div className="ecommerce">
          <nav className="navgrid">
            <IconButton
              onClick={this.returnView}
              className={
                this.state.currentView.current === 2 ||
                this.state.currentView.current === 1
                  ? "vis"
                  : "invis"
              }
            >
              <NavigateBeforeIcon />
            </IconButton>
            <div className="ecom-title">
              <h5>Men's Running Shoes</h5>
            </div>
            <IconButton id="cart" onClick={this.openCart}>
              <AddShoppingCartIcon />
            </IconButton>
          </nav>
          <div
            style={{ backgroundColor: "#f5f5f5", opacity: "1 !important" }}
            className="itemlayout"
          >
            {currentDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default Ecommerce;
