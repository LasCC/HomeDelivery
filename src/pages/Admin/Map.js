import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, CssBaseline, Typography, Divider, Box } from '@material-ui/core';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import DrawerDashboardAdmin from '../../components/DrawerDashboardAdmin';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#F4F6F3',
		boxShadow: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		borderRight: 0,
		zIndex: 1
	},
	drawerContainer: {
		overflow: 'auto'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(5),
		boxShadow: '-8px 0px 18px 0px rgba(0,0,0,0.05)',
		minHeight: '100vh',
		zIndex: 2
	}
}));

const markers = [
	{
		markerOffset: -15,
		name: 'Buenos Aires',
		coordinates: [ -58.3816, -34.6037 ]
	},
	{ markerOffset: -15, name: 'La Paz', coordinates: [ -68.1193, -16.4897 ] },
	{ markerOffset: 25, name: 'Brasilia', coordinates: [ -47.8825, -15.7942 ] },
	{ markerOffset: 25, name: 'Santiago', coordinates: [ -70.6693, -33.4489 ] },
	{ markerOffset: 25, name: 'Bogota', coordinates: [ -74.0721, 4.711 ] },
	{ markerOffset: 25, name: 'Quito', coordinates: [ -78.4678, -0.1807 ] },
	{ markerOffset: -15, name: 'Georgetown', coordinates: [ -58.1551, 6.8013 ] },
	{ markerOffset: -15, name: 'Asuncion', coordinates: [ -57.5759, -25.2637 ] },
	{ markerOffset: 25, name: 'Paramaribo', coordinates: [ -55.2038, 5.852 ] },
	{ markerOffset: 25, name: 'Montevideo', coordinates: [ -56.1645, -34.9011 ] },
	{ markerOffset: -15, name: 'Caracas', coordinates: [ -66.9036, 10.4806 ] },
	{ markerOffset: -15, name: 'Lima', coordinates: [ -77.0428, -12.0464 ] }
];
const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default (props) => {
	const classes = useStyles();
	const geoUrl =
		'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';
	const colorScale = scaleLinear().domain([ 0.29, 0.68 ]).range([ '#ffedea', '#ff5233' ]);
	const [ data, setData ] = useState([]);
	useEffect(() => {
		csv(`/vulnerability.csv`).then((data) => {
			setData(data);
		});
	}, []);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<Box display='flex' alignItems='center'>
						<img src='https://svgur.com/i/Jg4.svg' alt='logoHomedeliveryBlanc' style={{ height: 40 }} />
						<Box>
							<Typography style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>
								HomeDelivery
							</Typography>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<DrawerDashboardAdmin />
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Box
					style={{ height: '80vh', width: '80vw' }}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<Box>
						<Typography color='textSecondary' variant='h6' component='h1' style={{ textAlign: 'center' }}>
							Pour l'instant c'est des fausses données..
						</Typography>
						<Typography variant='h4' component='h1' style={{ fontWeight: 'bold', textAlign: 'center' }}>
							Toutes les annonces répertoriées sur la carte
						</Typography>
						<ComposableMap
							style={{ width: 700, marginTop: 25 }}
							projection='geoAzimuthalEqualArea'
							projectionConfig={{
								rotate: [ 58, 20, 0 ],
								scale: 400
							}}
						>
							<ZoomableGroup zoom={1}>
								<Geographies geography={geoUrl}>
									{({ geographies }) =>
										geographies
											.filter((d) => d.properties.REGION_UN === 'Americas')
											.map((geo) => (
												<Geography
													key={geo.rsmKey}
													geography={geo}
													fill='#EAEAEC'
													stroke='#D6D6DA'
												/>
											))}
								</Geographies>
								{markers.map(({ name, coordinates, markerOffset }) => (
									<Marker key={name} coordinates={coordinates}>
										<circle r={10} fill='#19cc5b' stroke='#fff' strokeWidth={2} />
										<text
											textAnchor='middle'
											y={markerOffset}
											style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
										>
											{name}
										</text>
									</Marker>
								))}
							</ZoomableGroup>
						</ComposableMap>
					</Box>
				</Box>
			</main>
		</div>
	);
};
