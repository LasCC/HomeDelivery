import React from 'react';
import { Box, Typography, Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ROUTE from '../Routes';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

export default (props) => {
	return (
		<div>
			<Box display='flex' alignItems='center'>
				<Box flexGrow={1} display='flex' alignItems='center'>
					<img src='https://svgur.com/i/Jbo.svg' alt='voiture_logo_checkout' />
					<Box style={{ marginLeft: 25 }}>
						<Typography color='textSecondary'>
							Annonce créer le {moment().format('DD MMMM YYYY')}
						</Typography>
						<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
							A [Ville inscrite à l'inscription]
						</Typography>
					</Box>
				</Box>
				<Box>
					<Typography style={{ color: 'rgb(70, 176, 74)' }}>Besoin d'aide ?</Typography>
				</Box>
			</Box>
			<Box style={{ padding: 20 }}>
				<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
					<Link to={ROUTE.ANNONCE} style={{ textDecoration: 'none' }}>
						<Typography color='textSecondary'>Liste de courses</Typography>
					</Link>
					<Link to={ROUTE.CONFIRM_ANNONCE} style={{ textDecoration: 'none' }}>
						<Typography color='textSecondary'>Confirmation</Typography>
					</Link>
					<Link to={ROUTE.SHIPMENT_ANNONCE} style={{ textDecoration: 'none' }}>
						<Typography color='textSecondary'>Livraison</Typography>
					</Link>
					<Link to={ROUTE.CHECKOUT_CLIENT} style={{ textDecoration: 'none' }}>
						<Typography color='textSecondary'>Paiement</Typography>
					</Link>
				</Breadcrumbs>
			</Box>
		</div>
	);
};
