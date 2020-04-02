import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button, Breadcrumbs, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import Navbar from '../../components/Navbar';
import Map from '../../components/Map';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
window.document.title = 'HomeDelivery - Annonce livraison';

export default (props) => {
	const items = [
		{
			title: 'Jean célestin a accepter votre commande',
			time: 'Le 12 Mars 2020 à 19h30'
		},
		{
			title: 'Jean célestin est dans le magasin',
			time: 'Le 12 Mars 2020 à 19h38'
		},
		{
			title: 'Jean célestin a scanner le ticket de caisse',
			time: 'Le 12 Mars 2020 à 19h43'
		},
		{
			title: 'Jean célestin vous as envoyé le ticket de caisse',
			time: 'Le 12 Mars 2020 à 19h44'
		},
		{
			title: 'Jean célestin est en chemin vers votre domicile',
			time: 'Le 12 Mars 2020 à 19h45'
		}
	];
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
									<Typography color='textSecondary'>Commande [#4658743]</Typography>
									<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
										[Jean-kev] est en chemin.
									</Typography>
								</Box>
							</Box>
							<Box>
								<Typography style={{ color: '#18B074' }}>Contacter le livreur</Typography>
							</Box>
						</Box>
						<Box style={{ padding: 20 }}>
							<Breadcrumbs separator={<NavigateNextIcon fontSize='small' />} aria-label='breadcrumb'>
								<Link to={ROUTE.ANNONCE} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary'>Liste de courses</Typography>
								</Link>
								<Link to={ROUTE.RECAP_ANNONCE} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary'>Récapitulatif</Typography>
								</Link>
								<Link to={ROUTE.CHECKOUT_CLIENT} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
										Paiement
									</Typography>
								</Link>
							</Breadcrumbs>
						</Box>
						<Divider />
						<Box style={{ marginTop: 15 }}>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
								Détail de votre commande :{' '}
							</Typography>
							{items.map((command) => {
								return (
									<Box display='flex' alignItems='center' p={3}>
										<Box>
											<Divider
												orientation='vertical'
												style={{ backgroundColor: '#93E2C6', height: 80, width: 3 }}
											/>
										</Box>
										<Box style={{ marginTop: 20, marginBottom: 20, padding: 10 }}>
											<Typography variant='h2' style={{ fontWeight: 'bold', fontSize: 20 }}>
												{command.title}
											</Typography>
											<Typography color='textSecondary'>{command.time}</Typography>
										</Box>
									</Box>
								);
							})}
						</Box>
						<Box display='flex' flexDirection='row-reverse'>
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
								Paiement <i className='uil uil-card-atm' />
							</Button>
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
