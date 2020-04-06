import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';
import Carousel_Text from '../components/Carousel_Text';
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
				<Grid item xs={12} xl={5} md={5} sm={12}>
					<Box style={{ height: '100vh' }} display='flex' alignItems='center' justifyContent='center'>
						<Box style={{ padding: 25, width: '70%' }}>
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
				<Grid item xs={12} xl={7} md={7} sm={12} className='backgroundRight'>
					<Box
						style={{ height: '100vh' }}
						display='flex'
						alignItems='center'
						justifyContent='center'
						className='registrationHelper'
					>
						<Box
							style={{
								position: 'relative',
								top: '40%',
								left: '25%',
								transform: 'translate(-40%, -25%)'
							}}
						>
							<Carousel_Text />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
