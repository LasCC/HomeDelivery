import React from 'react';
import { Box, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export default (props) => {
	return (
		<Box display='flex' alignItems='center' className='stepperRegister' style={{ width: '100%' }}>
			<Box>
				<img
					src='https://source.unsplash.com/random'
					alt='imageHistorique'
					style={{ height: 125, width: 125, borderRadius: 10, objectFit: 'cover' }}
				/>
			</Box>
			<Box style={{ marginLeft: 10 }} flexGrow={1}>
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
			<Box>
				<i class='uil uil-arrow-right' style={{ fontSize: 25 }} />
			</Box>
		</Box>
	);
};
