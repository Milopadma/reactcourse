import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner";
import React from "react";
class GeolocationAndTime extends React.Component {
  //contructor is called first, great for setting initial state of a component
  constructor(props) {
    super(props); //super calls the constructor of the parent class
    //only set state like this when initializing, otherwise use setState
    //latitude is null as it doesn't know yet at this point
    this.state = { lat: null, long: null, errorMessage: "", time: null }; //state is a JS object that contains data relevant to a component
  }

  //this looks like the Start() method in unity C#, only use this for data loading
  //called only once, when component shows up in UI
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //placed here to only get once
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
    setInterval(() => {
      let currentTime = new Date().toLocaleTimeString();
      this.setState({ time: currentTime });
    }, 1000);
  }
  //only runs when component is updated
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  renderContent() {
    //helper function to render content
    return (
      <div className="ui card">
        <div className="content">
          <h1 className="header">Location Data 🌐</h1>
          <div className="description">
            Show your current latitude and longitude.
          </div>
          <br />
          {!this.state.errorMessage && this.state.lat && (
            //pass the state of lat and long to child component of SeasonDisplay
            <SeasonDisplay
              latitude={this.state.lat}
              longitude={this.state.long}
            />
          )}
          {!this.state.errorMessage && !this.state.lat && (
            <LoadingSpinner message="Accept location" />
          )}
          {this.state.errorMessage && (
            <div>Error: {this.state.errorMessage}</div>
          )}
          <br />
          <p>showing default prop of LoadingSpinner component</p>
          <LoadingSpinner />
          <div>current time: {this.state.time}</div>
        </div>
      </div>
    );
  }

  //render() is needed in react
  render() {
    return (
      <div className="ui container border red">{this.renderContent()}</div>
    );
  }
}

export default GeolocationAndTime;
