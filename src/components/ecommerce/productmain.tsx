import React, { Component, MouseEvent, Ref } from "react";
import Item from "./item";
import { fromEvent } from "rxjs";
import { FromEventTarget } from "rxjs/internal/observable/fromEvent";
import { tap } from "rxjs/operators";

interface IMainProps {
  items: Item[];
  selectedItem: (event: MouseEvent<HTMLImageElement>, item: Item) => void;
}

export default class productmain extends Component<IMainProps> {
  mkEventTarget = (qs: string): FromEventTarget<Event> =>
    document.querySelector(qs) as FromEventTarget<Event>;

  spacing = (i: number) => {
    console.log(i + "index and length" + this.props.items.length);
    if (window.screen.width < 600) {
      if (i + 1 === this.props.items.length)
        return {
          marginBottom: "25vh",
        };
    } else {
      return {
        marginBottom: "0",
      };
    }
  };

  componentDidMount() {
    let imgSub = fromEvent(this.mkEventTarget("#item"), "click").pipe(
      tap((input) => console.log(input))
    );
  }

  render() {
    console.log(this.props.items[0].images[0]);
    let displayItems = this.props.items.map((item, i) => (
      <img
        className="item"
        id="item"
        key={i}
        src={item.images[0]}
        style={this.spacing(i)}
        alt=""
        onClick={(e) => this.props.selectedItem(e, item)}
      />
    ));
    return <div className="itemview"> {displayItems} </div>;
  }
}