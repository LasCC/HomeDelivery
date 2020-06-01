import React, { Component } from "react";
import { render } from "react-dom";
import MapGL, {
  FlyToInterpolator,
  GeolocateControl,
  NavigationControl,
  FullscreenControl,
  Marker,
} from "react-map-gl";
import { GeoJsonLayer } from "deck.gl";
import Pin from "./Pin";
import MarkersCity from "../data/cities.json";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import ControlPanel from "./ControlPanel";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWljaGFsbG93IiwiYSI6ImNrN3JraDE5aTBkcG0zbG91aWxzaGN1ZHYifQ.3y3s0EYnPlHXE5F_8-ySkg";

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10,
};

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const cardsStyle = {
  position: "relative",
  top: "100%",
  left: "100%",
  transform: "translate(-100%, -100%)",
  padding: "10px",
};

export default class App extends Component {
  mapRef = React.createRef();
  state = {
    viewport: {
      latitude: 48.84978,
      longitude: 2.36464,
      zoom: 12,
      pitch: 60,
    },
    searchResultLayer: null,
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

  handleOnResult = (event) => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10,
      }),
    });
  };
  _onViewportChange = (viewport) => this.setState({ viewport });

  _onClickMarker = (city) => {
    this.setState({ popupInfo: city });
  };

  _goToViewport = ({ longitude, latitude }) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 16,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    });
  };

  render() {
    const { viewport, settings, searchResultLayer } = this.state;

    return (
      <MapGL
        {...viewport}
        {...settings}
        ref={this.mapRef}
        width='100%'
        height='100%'
        mapStyle='mapbox://styles/michallow/ck86fkoji05jh1ipb0l9rlfy7'
        onViewportChange={this.handleViewportChange}
        dragRotate={true}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        layers={[searchResultLayer]}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        {/* Pins */}
        {MarkersCity.map((command) => {
          return (
            <Marker longitude={command.longitude} latitude={command.latitude}>
              <Pin size={20} />
            </Marker>
          );
        })}
        <Geocoder
          mapRef={this.mapRef}
          onResult={this.handleOnResult}
          onViewportChange={this._goToViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position='top-right'
          marker={{ color: "red" }}
          placeholder='Rechercher une adresse'
        />
        <div style={cardsStyle}>
          {/* Cards on the map */}
          <ControlPanel
            containerComponent={this.props.containerComponent}
            onViewportChange={this._goToViewport}
          />
        </div>
      </MapGL>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}
