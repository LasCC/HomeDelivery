import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
window.document.title = 'HomeDelivery - Création de compte bénévole';

export default (props) => {
	const [ values, setValues ] = useState({
		firstname: '',
		lastname: '',
		mail: '',
		password: '',
		phone_number: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const handleSubmit = () => {
		console.log('====== Registration HELPER ======');
		console.log(values);
	};
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
							backgroundColor: 'rgb(70, 176, 74)'
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
							<TextField
								label='Nom'
								variant='outlined'
								placeholder='PLATINI'
								fullWidth
								value={values.firstname}
								onChange={handleChange('firstname')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
							<TextField
								label='Prénom'
								variant='outlined'
								placeholder='Michel'
								fullWidth
								value={values.lastname}
								onChange={handleChange('lastname')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='Adresse email'
								variant='outlined'
								placeholder='michel.platini@gmail.com'
								fullWidth
								value={values.mail}
								onChange={handleChange('mail')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='Mot de passe'
								variant='outlined'
								placeholder='****************'
								type='password'
								fullWidth
								value={values.password}
								onChange={handleChange('password')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='N° de téléphone'
								placeholder='060316579'
								variant='outlined'
								fullWidth
								value={values.phone_number}
								onChange={handleChange('phone_number')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='Date de naissance'
								variant='outlined'
								format='dd/MM/yyyy'
								fullWidth
								type='date'
								InputLabelProps={{
									shrink: true
								}}
								style={{ marginTop: 15, marginBottom: 15 }}
								value={values.date_naissance}
								onChange={handleChange('date_naissance')}
							/>
							<Link to={ROUTE.CONFIRM_REGISTRATION} style={{ textDecoration: 'none' }}>
								<Button
									onClick={handleSubmit}
									fullWidth
									style={{
										backgroundColor: 'rgb(70, 176, 74)',
										color: 'white',
										fontWeight: 'bold',
										marginTop: 15,
										padding: 15,
										borderRadius: 4
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
