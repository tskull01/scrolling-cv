import React, { Component } from "react";
import "./trailfinder.css";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete, {
  AutocompleteInputChangeReason,
} from "@material-ui/lab/Autocomplete";
import Trail from "./trail";
import { fromEvent } from "rxjs";
class OptionObject {
  index: number;
  description: string;
  constructor(index: number, description: string) {
    this.index = index;
    this.description = description;
  }
}
export class TrailObject {
  name: string;
  location: string;
  imageSrc: string;
  type: string;
  summary: string;
  constructor(
    name: string,
    location: string,
    imageSrc: string,
    type: string,
    summary: string
  ) {
    this.name = name;
    this.location = location;
    this.imageSrc = imageSrc;
    this.type = type;
    this.summary = summary;
  }
}

export default class trailfinder extends Component {
  state = {
    value: "",
    options: new Array<string>(),
    inputValue: "",
    textRef: React.createRef<HTMLInputElement>(),
    geocoder: {
      current: (window as any).google
        ? new (window as any).google.maps.Geocoder()
        : null,
    },
    autocomplete: {
      current: (window as any).google
        ? new (window as any).google.maps.places.AutocompleteService()
        : null,
    },
    optionObjects: new Array<OptionObject>(),
    predictionIds: new Array<string>(),
    trailsArray: new Array<TrailObject>(),
    loading: false,
    rerender: false,
  };
  handleOnChange = (e: object, newValue: any) => {
    //Selection was made
    if (newValue !== null) {
      let selection = newValue;
      let selectionObject = this.state.optionObjects.filter(
        (option) => option.description === selection
      );
      this.setState({ options: [], loading: true });
      //String name of place matched with index of place id array
      //Sends place id to optionSelected
      this.optionSelected(this.state.predictionIds[selectionObject[0].index]);
    } else {
      this.setState({ value: "", trailsArray: [] });
    }
  };
  setInputValue = (
    event: React.ChangeEvent<{}>,
    newValue: string,
    reason: AutocompleteInputChangeReason
  ) => {
    //Happens on input from user
    if (newValue.length > 0) {
      //Sets the value of the input
      this.setState({ value: newValue });
      let request = { input: this.state.value };
      if (
        this.state.autocomplete.current !== null &&
        request.input.length > 0
      ) {
        //Getting predictions from google
        this.state.autocomplete.current.getPlacePredictions(
          request,
          this.setOptions
        );
      }
    } else {
      this.setState({ options: [] });
    }
  };
  setOptions = (array: any, status: any) => {
    //Callback after new input
    //Mapping through the predictions and grabbing the description
    //Object contains the description and the index of that description
    let newOptions = array.map((prediction: any, i: number) => {
      return new OptionObject(i, prediction.description);
    });
    let optionDescriptions = newOptions.map(
      (optionObject: OptionObject) => optionObject.description
    );
    console.log(newOptions[0].description);
    let optionIds = array.map((prediction: any) => prediction.place_id);
    this.setState({
      options: optionDescriptions,
      optionObjects: newOptions,
      predictionIds: optionIds,
    });
  };
  optionSelected = (selected: string) => {
    let request = { placeId: selected };
    this.state.geocoder.current.geocode(request, this.getLongLat);
  };
  getLongLat = (geocodedResponse: any) => {
    let latlng = {
      lat: geocodedResponse[0].geometry.location.lat(),
      lng: geocodedResponse[0].geometry.location.lng(),
    };
    let key = process.env.REACT_APP_TRAIL_API_KEY;
    fetch(
      `https://www.trailrunproject.com/data/get-trails?lat=${latlng.lat}&lon=${latlng.lng}&maxDistance=10&key=${key}`,
      {}
    ).then((response) => {
      const apiResponse = response.json();
      apiResponse.then((trailResponse) => {
        let trails = trailResponse.trails.map(
          (trail: any) =>
            new TrailObject(
              trail.name,
              trail.location,
              trail.imgMedium,
              trail.type,
              trail.summary
            )
        );
        this.setState({ trailsArray: trails, loading: false });
      });
    });
  };
  checkOptions = (option: any, value: any) => {
    return this.state.options.includes(value);
  };
  componentDidMount() {
    let windowSub = fromEvent(window, "DOMContentLoaded").subscribe(
      (loaded) => {
        if (
          this.state.autocomplete.current === null ||
          (this.state.geocoder.current === null &&
            (window as any).google.maps &&
            (window as any)?.google?.maps.places)
        ) {
          let googleMaps = new (window as any)()?.google?.maps.Geocoder();
          let googlePlaces = new (window as any)()?.google?.maps.places.AutocompleteService();
          if (googleMaps && googlePlaces) {
            this.setState({
              autocomplete: {
                current: googlePlaces,
              },
              geocoder: { current: googleMaps },
            });
            windowSub.unsubscribe();
          } else {
            this.setState({ rerender: !this.state.rerender });
          }
        }
      }
    );

    //Sets original value to Boulder, CO
    this.optionSelected("ChIJ06-NJ06Na4cRWIAboHw7Ocg");
  }
  render() {
    return (
      <div className="trail-container">
        <div className="search">
          <h3>Find a trail near you</h3>
          <Autocomplete
            value={this.state.value}
            onChange={this.handleOnChange}
            onInputChange={this.setInputValue}
            getOptionSelected={this.checkOptions}
            clearOnEscape={true}
            id="controllable-states-demo"
            options={this.state.options}
            fullWidth={true}
            renderInput={(params) => (
              <TextField
                {...params}
                ref={this.state.textRef}
                label="Enter Location in the US"
                variant="outlined"
              />
            )}
          />
        </div>

        <div
          className="results"
          style={
            this.state.trailsArray.length > 1
              ? { overflowY: "scroll", overflowX: "hidden" }
              : { overflow: "hidden" }
          }
        >
          {this.state.loading ? (
            <CircularProgress style={{ margin: "3vw" }} />
          ) : null}
          <Trail trails={this.state.trailsArray} />
        </div>
      </div>
    );
  }
}
