import React from 'react';
import { Box, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export default (props) => {
	return (
		<Box
			style={{
				backgroundColor: 'white',
				padding: 25,
				marginTop: 15,
				borderRadius: 10,
				border: 'solid 1px rgba(0, 0, 0, 0.10)',
				boxShadow:
					'0 2px 2.3px rgba(0, 0, 0, 0.011),  0 3.4px 5.6px rgba(0, 0, 0, 0.016),  0 5.1px 10.7px rgba(0, 0, 0, 0.02),  0 8.5px 19.1px rgba(0, 0, 0, 0.024),  0 18.7px 35.4px rgba(0, 0, 0, 0.029),  0 100px 80px rgba(0, 0, 0, 0.04)'
			}}
			display='flex'
			alignItems='center'
		>
			<Box>
				<img
					src='https://source.unsplash.com/random'
					alt='imageHistorique'
					style={{ height: 125, width: 125, borderRadius: 10, objectFit: 'cover' }}
				/>
			</Box>
			<Box
				style={{
					marginLeft: 15
				}}
			>
				<Typography varaiant='h6' component='h1' style={{ fontWeight: 'bold' }}>
					Annonce le {moment().format('DD MMMM YYYY')}
				</Typography>
				<Typography varaiant='h6' component='h1' style={{ marginTop: 10, marginBottom: 10 }}>
					<i className='uil uil-map-marker' /> [Adresse dans le localstorage]
				</Typography>
				<Typography variant='paragraph' color='textSecondary'>
					Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at feli nare nisl.
				</Typography>
			</Box>
		</Box>
	);
};
