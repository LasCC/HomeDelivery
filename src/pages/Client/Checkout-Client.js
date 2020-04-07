import React, { useState } from 'react';
import { Grid, Typography, Box, Breadcrumbs, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MapDev from '../../components/MapDev';
import ROUTE from '../../Routes';
import Navbar from '../../components/Navbar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = 'HomeDelivery - Paiement';

export default (props) => {
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={8} md={8} sm={12}>
					<Navbar />
					<Box style={{ padding: 35 }}>
						<Box display='flex' alignItems='center'>
							<Box flexGrow={1} display='flex' alignItems='center'>
								<img src='https://svgur.com/i/Jbo.svg' alt='voiture_logo_checkout' />
								<Box style={{ marginLeft: 25 }}>
									<Typography color='textSecondary'>Annonce créer le [Date aujourd'hui]</Typography>
									<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
										A [Ville inscrite à l'inscription]
									</Typography>
								</Box>
							</Box>
							<Box>
								<Typography style={{ color: '#18B074' }}>Besoin d'aide ?</Typography>
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
									<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
										Paiement
									</Typography>
								</Link>
							</Breadcrumbs>
						</Box>
						<Divider />
						<Box style={{ marginTop: 5, padding: 25 }}>Paiement ici :)</Box>
					</Box>
				</Grid>
				<Grid item xs={12} xl={4} md={4} sm={12}>
					<Box
						style={{
							position: '-webkit-sticky',
							position: 'sticky',
							top: 0,
							height: '100vh',
							backgroundColor: '#F3F7F3'
						}}
					>
						<MapDev />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
