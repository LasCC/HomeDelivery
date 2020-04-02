import React, { PureComponent } from 'react';
import { Box, Typography } from '@material-ui/core';

import CITIES from '../data/cities.json';

export default class ControlPanel extends PureComponent {
	_renderButton = (city, index) => {
		const backgroundImageCard = city.image;
		return (
			<Box
				style={{ backgroundImage: `url(${backgroundImageCard})` }}
				className='CardsDevMap hoverCard'
				onClick={() => this.props.onViewportChange(city)}
			>
				<Box style={{ padding: 15 }}>
					<Typography gutterBottom variant='h5' component='h1' style={{ fontWeight: 'bold', color: 'white' }}>
						{city.name}
					</Typography>
					<Typography style={{ color: 'white' }}>
						{city.latitude} | {city.longitude}
					</Typography>
				</Box>
			</Box>
		);
	};

	render() {
		return (
			<Box style={{ padding: 15, height: '220px' }}>
				<Box
					display='flex'
					flexWrap='wrap'
					alignContent='flex-end'
					alignItems='center'
					style={{ height: '100%', width: '1000vw', overflow: 'hidden' }}
				>
					{CITIES.map(this._renderButton)}
				</Box>
			</Box>
		);
	}
}
