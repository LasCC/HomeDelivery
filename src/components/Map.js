import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react';
import MapGL, { GeolocateControl, NavigationControl, FullscreenControl, Marker, Source, Layer } from 'react-map-gl';
import Pin from './Pin';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWljaGFsbG93IiwiYSI6ImNrN3JraDE5aTBkcG0zbG91aWxzaGN1ZHYifQ.3y3s0EYnPlHXE5F_8-ySkg';

const geolocateStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	margin: 10
};

const fullscreenControlStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '10px'
};

const navStyle = {
	position: 'absolute',
	top: 36,
	left: 0,
	padding: '10px'
};

const data = require('../data/data.geojson');

export default class App extends Component {
	state = {
		viewport: {
			latitude: 48.84978,
			longitude: 2.36464,
			zoom: 11.3,
			bearing: -25,
			pitch: 60
		},
		marker: {
			latitude: 48.84978,
			longitude: 2.36464
		}
	};
	_onViewportChange = (viewport) => this.setState({ viewport });

	_logDragEvent(name, event) {
		this.setState({
			events: {
				...this.state.events,
				[name]: event.lngLat
			}
		});
	}

	_onMarkerDragStart = (event) => {
		this._logDragEvent('onDragStart', event);
	};

	_onMarkerDrag = (event) => {
		this._logDragEvent('onDrag', event);
	};

	_onMarkerDragEnd = (event) => {
		this._logDragEvent('onDragEnd', event);
		this.setState({
			marker: {
				longitude: event.lngLat[0],
				latitude: event.lngLat[1]
			}
		});
	};

	render() {
		const { viewport } = this.state;
		const { marker } = this.state;
		console.log(marker.longitude);
		console.log(marker.latitude);

		return (
			<MapGL
				{...viewport}
				width='100%'
				height='100%'
				mapStyle='mapbox://styles/michallow/ck8g06vsi3l5p1inv7w41sstu'
				onViewportChange={this._onViewportChange}
				mapboxApiAccessToken={MAPBOX_TOKEN}
			>
				<GeolocateControl
					style={geolocateStyle}
					positionOptions={{ enableHighAccuracy: true }}
					trackUserLocation={true}
				/>
				<Source type='geojson' data={data}>
					<Layer
						id='lineLayer'
						type='line'
						source='my-data'
						layout={{
							'line-join': 'round',
							'line-cap': 'round'
						}}
						paint={{
							'line-color': '#18B074',
							'line-width': 5
						}}
					/>
				</Source>
				<Marker
					longitude={marker.longitude}
					latitude={marker.latitude}
					offsetTop={-20}
					offsetLeft={-10}
					draggable
					onDragStart={this._onMarkerDragStart}
					onDrag={this._onMarkerDrag}
					onDragEnd={this._onMarkerDragEnd}
				>
					<Pin size={20} />
				</Marker>
				<div style={fullscreenControlStyle}>
					<FullscreenControl />
				</div>
				<div style={navStyle}>
					<NavigationControl />
				</div>
			</MapGL>
		);
	}
}

export function renderToDom(container) {
	render(<App />, container);
}
