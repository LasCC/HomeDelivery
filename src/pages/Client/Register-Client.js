import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
window.document.title = 'HomeDelivery - Création de compte classique';

export default (props) => {
	const [ values, setValues ] = useState({
		firstname: '',
		lastname: '',
		password: '',
		password_confirm: '',
		mail: '',
		home: '',
		complement: '',
		city: '',
		code_post: '',
		phone_number: '',
		date_naissance: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmit = () => {
		console.log('====== Registration ======');
		console.log(values);
	};
	console.log(values);
	return (
		<div>
			<Grid container>
				<Grid
					item
					xs={12}
					xl={3}
					md={3}
					sm={12}
					style={{ boxShadow: '17px 0px 37px -20px rgba(0, 0, 0, 0.35)' }}
				>
					<Box
						style={{
							height: '100vh',
							zIndex: 2,
							backgroundColor: '#18B074'
						}}
						className='backgroundRegister'
					>
						<Box
							display='flex'
							alignItems='center'
							style={{
								padding: 25
							}}
						>
							<img src='http://svgur.com/i/Jqv.svg' alt='logoHomedeliveryBlanc' style={{ height: 40 }} />
							<Box>
								<Typography style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
									HomeDelivery
								</Typography>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} xl={9} md={9} sm={12}>
					<Box
						style={{ height: '100vh', zIndex: 1 }}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Box style={{ padding: 25, width: '85%' }}>
							<Typography variant='h1' style={{ fontWeight: 'bolder', fontSize: 55, marginBottom: 25 }}>
								Inscription
							</Typography>
							<Typography color='textSecondary'>
								L’inscription est gratuite et aucun frais ne sera ajouté.
							</Typography>
							<Box display='flex'>
								<TextField
									label='Nom'
									variant='outlined'
									placeholder='PLATINI'
									fullWidth
									type='text'
									value={values.firstname}
									onChange={handleChange('firstname')}
									style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Prénom'
									variant='outlined'
									placeholder='Michel'
									fullWidth
									type='text'
									value={values.lastname}
									onChange={handleChange('lastname')}
									style={{ marginTop: 25, marginBottom: 15 }}
								/>
							</Box>
							<Box display='flex'>
								<TextField
									label='Mot de passe'
									type='password'
									variant='outlined'
									placeholder='*****************'
									fullWidth
									value={values.password}
									onChange={handleChange('password')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Confirmation'
									type='password'
									variant='outlined'
									placeholder='*****************'
									fullWidth
									value={values.password_confirm}
									onChange={handleChange('password_confirm')}
									style={{ marginTop: 15, marginBottom: 15 }}
								/>
							</Box>
							<Box display='flex'>
								<TextField
									label='Adresse mail'
									variant='outlined'
									placeholder='michel.platini@gmail.com'
									type='email'
									fullWidth
									value={values.mail}
									onChange={handleChange('mail')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Adresse'
									variant='outlined'
									placeholder='12 rue des fleures'
									fullWidth
									value={values.home}
									onChange={handleChange('home')}
									style={{ marginTop: 15, marginBottom: 15 }}
								/>
							</Box>
							<Box display='flex'>
								<TextField
									label='Complément adresse'
									variant='outlined'
									placeholder='Batiment C, porte 313'
									fullWidth
									value={values.complement}
									onChange={handleChange('complement')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Ville'
									variant='outlined'
									placeholder='Paris'
									fullWidth
									value={values.city}
									onChange={handleChange('city')}
									style={{ marginTop: 15, marginBottom: 15 }}
								/>
							</Box>
							<TextField
								label='Date de naissance'
								variant='outlined'
								format='dd/MM/yyyy'
								fullWidth
								type='date'
								helperText={'Veuillez renseigner une date valide : dd/MM/yyyy'}
								InputLabelProps={{
									shrink: true
								}}
								style={{ marginTop: 15, marginBottom: 15 }}
								value={values.date_naissance}
								onChange={handleChange('date_naissance')}
							/>
							<Box display='flex'>
								<TextField
									label='Code postale'
									variant='outlined'
									placeholder='75001'
									fullWidth
									value={values.code_post}
									onChange={handleChange('code_post')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='N° de téléphone'
									variant='outlined'
									placeholder='060316579'
									fullWidth
									type='tel'
									value={values.phone_number}
									onChange={handleChange('phone_number')}
									style={{ marginTop: 15, marginBottom: 15 }}
								/>
							</Box>
							<Link to={ROUTE.CONFIRM_REGISTRATION} style={{ textDecoration: 'none' }}>
								<Button
									onClick={handleSubmit}
									fullWidth
									style={{
										backgroundColor: '#18B074',
										color: 'white',
										fontWeight: 'bold',
										marginTop: 15,
										padding: 15,
										borderRadius: 0
									}}
								>
									Continuer <i className='uil uil-arrow-right' />
								</Button>
							</Link>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
