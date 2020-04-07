import React, { useState } from 'react';
import { Grid, Typography, Box, Breadcrumbs, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import Navbar from '../../components/Navbar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = 'HomeDelivery - Confirmation de votre annonce';

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
									<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
										Confirmation
									</Typography>
								</Link>
								<Link to={ROUTE.SHIPMENT_ANNONCE} style={{ textDecoration: 'none' }}>
									<Typography color='textSecondary'>Livraison</Typography>
								</Link>
								<Link to={ROUTE.CHECKOUT_CLIENT} style={{ textDecoration: 'none' }}>
									<Typography color='textSecondary'>Paiement</Typography>
								</Link>
							</Breadcrumbs>
						</Box>
						<Divider />
						<Box style={{ marginTop: 15, padding: 25 }}>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
								Confirmation de votre annonce
							</Typography>
							<Divider style={{ marginTop: 15, marginBottom: 15 }} />
							<Typography>
								Avant de continuer dans le processus de création d'annonce, merci de bien vouloir
								confirmer la liste de courses que vous avez renseigné sur votre droite
							</Typography>
							<Link to={ROUTE.ANNONCE} style={{ textDecoration: 'none', color: 'black' }}>
								<Box
									display='flex'
									alignItems='center'
									className='stepperRegister'
									style={{ width: '85%' }}
								>
									<Box>
										<i className='uil uil-exclamation-circle' style={{ fontSize: 50 }} />
									</Box>
									<Box style={{ marginLeft: 10 }} flexGrow={1}>
										<Typography>
											Corriger votre <strong>annonce</strong>
										</Typography>
										<Typography color='textSecondary'>
											Vous allez être redirigés à la page précédente pour effectuer vos différents
											changements.
										</Typography>
									</Box>
									<Box>
										<i class='uil uil-arrow-right' style={{ fontSize: 25 }} />
									</Box>
								</Box>
							</Link>
							<Link to={ROUTE.SHIPMENT_ANNONCE} style={{ textDecoration: 'none', color: 'black' }}>
								<Box
									display='flex'
									alignItems='center'
									className='stepperRegister'
									style={{ width: '85%' }}
								>
									<Box>
										<i className='uil uil-check-circle' style={{ fontSize: 50 }} />
									</Box>
									<Box style={{ marginLeft: 10 }} flexGrow={1}>
										<Typography>
											Valider votre <strong>annonce</strong>
										</Typography>
										<Typography color='textSecondary'>
											Vous allez être redirigés et continuer le processus de création d'annonce.
										</Typography>
									</Box>
									<Box>
										<i class='uil uil-arrow-right' style={{ fontSize: 25 }} />
									</Box>
								</Box>
							</Link>
						</Box>
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
						<Box style={{ padding: 35 }}>
							<Typography component='h1' variant='h6'>
								Confirmation de votre annonce <i className='uil uil-ticket' />
							</Typography>
							<Divider style={{ marginTop: 15, marginBottom: 15 }} />
							<article className='ticket'>
								<Box className='ticket__wrapper'>
									<Box className='ticket__header'>
										<Typography>
											Annonce créer le <strong>{moment().format('DD MMMM YYYY')}</strong>
										</Typography>
									</Box>
								</Box>
								<div className='ticket__divider' />
								<Box className='ticket__body'>
									<Box className='ticket__section'>
										<Typography>Liste des courses (0 / 10) :</Typography>
										<Typography>
											Liste de la liste de courses stocké dans le localstorage
										</Typography>
									</Box>
									<Box className='ticket__section'>
										<Typography>Demandes annexes :</Typography>
										<Typography color='textSecondary'>
											Liste de la liste de courses stocké dans le localstorage
										</Typography>
									</Box>

									<Box className='ticket__section'>
										<Typography>Mode de paiement :</Typography>
										<Typography color='textSecondary'>
											Liste de la liste de courses stocké dans le localstorage
										</Typography>
									</Box>
								</Box>
								<Box className='ticket__footer '>
									<Typography style={{ fontWeight: 'bold' }}>Prix maximum :</Typography>
									<Typography color='textSecondary'>30 €</Typography>
								</Box>
							</article>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
