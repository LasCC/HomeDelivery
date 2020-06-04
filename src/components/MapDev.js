import React, { Component } from "react";
import { render } from "react-dom";
import MapGL, { FlyToInterpolator, Marker } from "react-map-gl";
import Pin from "./Pin";
import MarkersCity from "../data/cities.json";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import ControlPanel from "./ControlPanel";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWljaGFsbG93IiwiYSI6ImNrN3JraDE5aTBkcG0zbG91aWxzaGN1ZHYifQ.3y3s0EYnPlHXE5F_8-ySkg";

const cardsStyle = {
  position: "relative",
  top: "100%",
  left: "100%",
  transform: "translate(-100%, -100%)",
  padding: "10px",
};

export default class App extends Component {
  state = {
    viewport: {
      latitude: 48.84978,
      longitude: 2.36464,
      zoom: 12,
      pitch: 60,
    },
  };
  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 2000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  onViewportChange = (viewport) => this.setState({ viewport });

  goToViewport = ({ longitude, latitude }) => {
    this.onViewportChange({
      longitude,
      latitude,
      zoom: 16,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  };

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        width='100%'
        height='100%'
        mapStyle='mapbox://styles/michallow/ck86fkoji05jh1ipb0l9rlfy7'
        onViewportChange={this.handleViewportChange}
        dragRotate={true}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {/* Pins */}
        {MarkersCity.map((command) => {
          return (
            <Marker longitude={command.longitude} latitude={command.latitude}>
              <Pin size={20} />
            </Marker>
          );
        })}
        <div style={cardsStyle}>
          {/* Cards on the map */}
          <ControlPanel
            containerComponent={this.props.containerComponent}
            onViewportChange={this.goToViewport}
          />
        </div>
      </MapGL>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}
