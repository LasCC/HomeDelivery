import React, { useState } from 'react';
import {
	Grid,
	TextField,
	Typography,
	Box,
	Button,
	Breadcrumbs,
	Divider,
	InputLabel,
	InputAdornment,
	FormControl,
	OutlinedInput,
	Select,
	FormHelperText
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import Navbar from '../../components/Navbar';
import Map from '../../components/Map';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
window.document.title = "HomeDelivery - Création d'annonce";

export default (props) => {
	const [ values, setValues ] = useState({
		list: '',
		annexe: '',
		price_min: '',
		payment: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmit = () => {
		console.log('====== LIST COURSES ======');
		console.log(values);
	};
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
									<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
										Liste de courses
									</Typography>
								</Link>
								<Link to={ROUTE.RECAP_ANNONCE} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary'>Récapitulatif</Typography>
								</Link>
								<Link to={ROUTE.CHECKOUT_CLIENT} style={{ textDecoration: 'none' }}>
									<Typography color='textPrimary'>Paiement</Typography>
								</Link>
							</Breadcrumbs>
						</Box>
						<Divider />
						<Box style={{ marginTop: 15, padding: 25 }}>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
								Liste de course :{' '}
							</Typography>
							<TextField
								style={{ marginTop: 15 }}
								label='Articles'
								multiline
								fullWidth
								rows='4'
								variant='outlined'
								placeholder='Riz, carottes, pommes vertes'
								value={values.list}
								onChange={handleChange('list')}
							/>
							<FormHelperText>La liste des courses est limitée à 10 articles maximum</FormHelperText>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15 }}>
								Demandes annexes :{' '}
							</Typography>
							<TextField
								style={{ marginTop: 15 }}
								label='Demande'
								multiline
								fullWidth
								rows='4'
								variant='outlined'
								placeholder='Dans le lidl près de chez moi..'
								value={values.annexe}
								onChange={handleChange('annexe')}
							/>
							<FormHelperText>Mettre texte ici pour expliquer les demandes annexes</FormHelperText>
							<Box style={{ marginBottom: 25, marginTop: 25 }}>
								<Box>
									<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 20 }}>
										Prix maximum à ne pas dépasser :
									</Typography>
									<FormControl fullWidth variant='outlined' style={{ marginTop: 15 }}>
										<InputLabel>Prix</InputLabel>
										<OutlinedInput
											type='number'
											variant='outlined'
											inputProps={{ min: '0', max: '50' }}
											value={values.price_min}
											onChange={handleChange('price_min')}
											endAdornment={<InputAdornment position='end'>€</InputAdornment>}
										/>
										<FormHelperText>Le prix maximum fixé est de 50€</FormHelperText>
									</FormControl>
								</Box>
							</Box>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 20 }}>
								Mode de paiement :
							</Typography>
							<FormControl fullWidth variant='outlined' style={{ marginTop: 15 }}>
								<InputLabel htmlFor='select'>Mode de paiement</InputLabel>
								<Select
									native
									fullWidth
									value={values.payment}
									onChange={handleChange('payment')}
									label='Carte de crédit'
									inputProps={{
										name: 'age',
										id: 'select'
									}}
								>
									<option aria-label='None' value='' />
									<option value='CB'>Carte de crédit</option>
									<option value='CASH'>Espèce</option>
								</Select>
							</FormControl>
							<Box display='flex' flexDirection='row-reverse'>
								<Link to={ROUTE.RECAP_ANNONCE} style={{ textDecoration: 'none' }}>
									<Button
										onClick={handleSubmit}
										style={{
											backgroundColor: '#18B074',
											color: 'white',
											fontWeight: 'bold',
											marginTop: 20,
											padding: 15,
											borderRadius: 0
										}}
									>
										Continuer <i className='uil uil-arrow-right' />
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
