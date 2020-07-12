import React, { Component } from "react";
import Item from "./item";
import Button from "@material-ui/core/Button";
import "./productView.css";
import Select from "@material-ui/core/Select";
import { InputLabel, MenuItem, FormControl } from "@material-ui/core";

interface IViewProps {
  selectedItem: Item;
  addToCart: () => void;
  returnView: () => void;
}

export default class productview extends Component<IViewProps> {
  state = {
    seletedImg: 0,
    selectedSize: "",
  };
  handleSize = (e: React.ChangeEvent<{ value: unknown }>) => {
    console.log(e.target.value);
    this.setState({ selectedSize: `${e.target.value}` });
    console.log(this.state.selectedSize + e.target.value);
  };
  imageClick = (n: number) => {
    this.setState({ seletedImg: n });
  };
  render() {
    let currentView =
      window.screen.width > 600 ? (
        //Desktop template
        <div className="view-container">
          <div className="img-group">
            {this.props.selectedItem.images.map((image, i) => {
              return (
                <img
                  src={`${image}?nf_resize=fit&w=300`}
                  alt="Alternate display options"
                  key={i}
                  onClick={(e) => this.imageClick(i)}
                />
              );
            })}
          </div>
          <img
            src={this.props.selectedItem.images[this.state.seletedImg]}
            alt=""
          />
          <div className="options">
            <h3>{this.props.selectedItem.name.toUpperCase()}</h3>
            <div className="select">
              <InputLabel id="size-label">Size</InputLabel>
              <Select
                labelId="size-label"
                value={this.state.selectedSize}
                autoWidth={true}
                onChange={this.handleSize}
              >
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </div>
            <Button
              className="center"
              onClick={(e) =>
                this.state.selectedSize !== ""
                  ? this.props.addToCart()
                  : alert("select a size")
              }
            >
              add to cart
            </Button>
          </div>
        </div>
      ) : (
        //Mobile template
        <div className="view-container">
          <img
            src={this.props.selectedItem.images[this.state.seletedImg]}
            alt="Full image"
          />
          <div className="img-group">
            {this.props.selectedItem.images.map((image, i) => {
              return (
                <img
                  src={image}
                  key={i}
                  alt="Image options"
                  onClick={(e) => this.imageClick(i)}
                />
              );
            })}
          </div>
          <h3>{this.props.selectedItem.name.toUpperCase()}</h3>
          <div className="select">
            <FormControl className="select-style">
              <InputLabel id="size-label" className="select-style">
                Size
              </InputLabel>
              <Select
                labelId="size-label"
                value={this.state.selectedSize}
                className="select-style"
                autoWidth={true}
                onChange={this.handleSize}
              >
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            className="center"
            onClick={(e) =>
              this.state.selectedSize !== ""
                ? this.props.addToCart()
                : alert("select a size")
            }
          >
            add to cart
          </Button>
        </div>
      );

    return <div>{currentView}</div>;
  }
}
