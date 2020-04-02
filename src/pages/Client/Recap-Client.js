import React, { useState } from 'react';
import { Grid, Typography, Box, Button, Breadcrumbs, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import Navbar from '../../components/Navbar';
import Map from '../../components/Map';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
window.document.title = 'HomeDelivery - Récapitulatif de votre annonce';

export default (props) => {
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={6} md={6} sm={12}>
					<Navbar />
					<Box style={{ padding: 35 }}>
						<Box display='flex' alignItems='center'>
							<Box flexGrow={1} display='flex' alignItems='center'>
								<img src='https://svgur.com/i/Jbo.svg' alt='voiture_logo_checkout' />
								<Box style={{ marginLeft: 25 }}>
									<Typography color='textSecondary'>Récapitulatif de la commande [id]</Typography>
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
									<Typography color='textPrimary'>Liste de courses</Typography>
								</Link>
								<Link to={ROUTE.RECAP_ANNONCE} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
										Récapitulatif
									</Typography>
								</Link>
								<Link to={ROUTE.CHECKOUT_CLIENT} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary'>Paiement</Typography>
								</Link>
							</Breadcrumbs>
						</Box>
						<Divider />
						<Box style={{ marginTop: 25, padding: 25 }}>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 15 }}>
								Récapitulatif de votre commande :{' '}
							</Typography>
							<Divider />
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15 }}>
								Liste de course :{' '}
							</Typography>
							<Box style={{ backgroundColor: 'gainsboro', padding: 25, marginTop: 15 }}>
								<Typography>Lister le state précédent</Typography>
							</Box>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15 }}>
								Demandes annexes :{' '}
							</Typography>
							<Box style={{ backgroundColor: 'gainsboro', padding: 25, marginTop: 15 }}>
								<Typography>Lister le state précédent</Typography>
							</Box>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15 }}>
								Prix + Mode de paiement :{' '}
							</Typography>
							<Box style={{ backgroundColor: 'gainsboro', padding: 25, marginTop: 15 }}>
								<Typography>Lister le state précédent</Typography>
							</Box>
							<Box display='flex' flexDirection='row-reverse'>
								<Link to={ROUTE.CHECKOUT_CLIENT} style={{ textDecoration: 'none' }}>
									<Button
										style={{
											backgroundColor: '#18B074',
											color: 'white',
											fontWeight: 'bold',
											marginTop: 20,
											padding: 15,
											borderRadius: 0
										}}
									>
										Confirmer <i className='uil uil-arrow-right' />
									</Button>
								</Link>
								<Button
									style={{
										color: 'gray',
										fontWeight: 'bold',
										marginTop: 20,
										padding: 15,
										borderRadius: 0
									}}
								>
									Annuler
								</Button>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} xl={6} md={6} sm={12}>
					<Box
						style={{
							position: '-webkit-sticky',
							position: 'sticky',
							top: 0,
							height: '100vh',
							backgroundColor: '3D9EFE7'
						}}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Map />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
