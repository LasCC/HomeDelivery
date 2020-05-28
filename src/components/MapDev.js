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

/* import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import 'mapbox-gl/dist/mapbox-gl.css'; // Updating node module will keep css up to date.
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'; // Updating node module will keep css up to date.

mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFsbG93IiwiYSI6ImNrN3JraDE5aTBkcG0zbG91aWxzaGN1ZHYifQ.3y3s0EYnPlHXE5F_8-ySkg';

export default class MapDev extends React.Component {
	componentDidMount() {
		const { lngMap, latMap, zoom } = {
			lngMap: 2.36464,
			latMap: 48.84978,
			zoom: 13.4
		};

		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/michallow/ck86fkoji05jh1ipb0l9rlfy7',
			center: [ lngMap, latMap ],
			zoom
		});

		let directions = new MapboxDirections({
			accessToken: mapboxgl.accessToken,
			profile: 'mapbox/driving',
			alternatives: true,
			unit: 'metric',
			language: 'fr',
			steps: true,
			geocoder: {
				language: 'fr'
			},
			placeholderDestination: 'Le point de départ',
			placeholderOrigin: 'La destination'
		});

		let lat = 48 + Math.random();
		let lon = 2 + Math.random();
		let latDest = 48 + Math.random();
		let lonDest = 2 + Math.random();
		directions.setOrigin([ lon, lat ]);
		let bounds = new mapboxgl.LngLatBounds();
		bounds.extend([ lon, lat ]);
		bounds.extend([ lonDest, latDest ]);
		directions.setDestination([ lonDest, latDest ]);
		map.fitBounds(bounds, { padding: 90, duration: 1000 });

		map.addControl(
			new mapboxgl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: true,
				showUserLocation: true
			})
		);
		map.on('load', function() {
			map.addControl(directions, 'top-left');
			map.setLayoutProperty('country-label-lg', 'text-field', [ 'get', 'name_fr' ]);
		});
	}

	render() {
		return (
			<div className='map-wrapper'>
				<div
					ref={(el) => (this.mapContainer = el)}
					style={{
						position: 'absolute',
						zIndex: 1,
						top: '0px',
						bottom: '0px',
						left: '0px',
						right: '0px',
						display: 'flex'
					}}
				/>
			</div>
		);
	}
}
 */
