import React, { PureComponent } from 'react';
import { Box, Typography } from '@material-ui/core';
import Draggable from 'react-draggable';
import CITIES from '../data/cities.json';

export default class ControlPanel extends PureComponent {
	_renderCity = (city, index) => {
		const backgroundImageCard = city.image;
		return (
			<Box
				key={index}
				style={{ backgroundImage: `url(${backgroundImageCard})` }}
				className='CardsDevMap mapCards'
				onClick={() => this.props.onViewportChange(city)}
			>
				<Box style={{ padding: 15 }}>
					<Typography gutterBottom variant='h5' component='h1' style={{ fontWeight: 'bold', color: 'white' }}>
						{city.name}
					</Typography>
					<Typography
						variant='outlined'
						color='primary'
						style={{ color: 'white', fontWeight: 'bold' }}
						onClick={() =>
							window.open(
								`https://www.google.com/maps/dir/?api=1&origin=&destination=12+residence+pasteur+rambouillet&travelmode=driving`
							)}
					>
						Lancer l'itineraire <i class='uil uil-arrow-up-right' />
					</Typography>
				</Box>
			</Box>
		);
	};

	render() {
		return (
			<Box style={{ padding: 15, height: '50vh' }}>
				<Box
					display='flex'
					flexWrap='wrap'
					alignContent='flex-end'
					alignItems='center'
					style={{ height: '100%', width: '1000vw', overflow: 'hidden' }}
				>
					{CITIES.map(this._renderCity)}
				</Box>
			</Box>
		);
	}
}
