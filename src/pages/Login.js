import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';
window.document.title = 'HomeDelivery - Connexion';

export default (props) => {
	const [ values, setValues ] = useState({
		email: '',
		password: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmit = () => {
		console.log('====== LOGIN ======');
		console.log(values);
	};
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={3} md={3} sm={12}>
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
							<Typography variant='h1' style={{ fontWeight: 'bolder', fontSize: 55, marginBottom: 15 }}>
								Connexion
							</Typography>
							<Typography color='textSecondary'>
								Veuillez renseigner vos identifiant pour accéder à la plateforme
							</Typography>
							<TextField
								label='Adresse email'
								variant='outlined'
								fullWidth
								value={values.email}
								onChange={handleChange('email')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<TextField
								label='Mot de passe'
								type='password'
								variant='outlined'
								fullWidth
								value={values.password}
								onChange={handleChange('password')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
							<Link to={ROUTE.HOME} style={{ textDecoration: 'none' }}>
								<Typography variant='h2' style={{ color: '#18B074', fontSize: 15 }}>
									Problème d'identification ?
								</Typography>
							</Link>
							<Button
								onClick={handleSubmit}
								fullWidth
								style={{
									backgroundColor: '#18B074',
									color: 'white',
									fontWeight: 'bold',
									marginTop: 20,
									padding: 15,
									borderRadius: 0
								}}
							>
								Connexion
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
