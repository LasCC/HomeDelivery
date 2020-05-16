import React, { useState } from 'react';
import {
	Box,
	Typography,
	Button,
	Container,
	TextField,
	Grid,
	InputAdornment,
	IconButton,
	Divider
} from '@material-ui/core';

const LoginAdmin = (props) => {
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		submitted: false
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Container maxWidth='lg'>
			<Box display='flex' alignItems='center' justifyContent='center' style={{ height: '90vh' }}>
				<Box
					className='fade-in-fwd'
					style={{
						width: 650,
						padding: 35,
						boxShadow:
							'  0 2.8px 2.2px rgba(0, 0, 0, 0.008),  0 6.7px 5.3px rgba(0, 0, 0, 0.012),  0 12.5px 10px rgba(0, 0, 0, 0.015),  0 22.3px 17.9px rgba(0, 0, 0, 0.018),  0 41.8px 33.4px rgba(0, 0, 0, 0.022),  0 100px 80px rgba(0, 0, 0, 0.03)',
						borderRadius: 10,
						backgroundColor: 'white'
					}}
				>
					<Grid container justify='center' alignItems='center'>
						<img src='https://svgur.com/i/Jg4.svg' alt='logoHomedelivery' />
					</Grid>
					<Grid container justify='center' alignItems='center'>
						<Typography variant='h6' style={{ marginTop: 15 }}>
							HomeDelivery Administration
						</Typography>
					</Grid>
					<Grid container justify='center' alignItems='center'>
						<Typography color='textSecondary'>
							Connectez-vous pour accéder à la plateforme d'administration
						</Typography>
					</Grid>
					<Divider style={{ marginTop: 15 }} />
					<TextField
						variant='outlined'
						label='Identifiant'
						value={values.email}
						onChange={handleChange('email')}
						type='email'
						fullWidth
						style={{
							marginTop: 20
						}}
					/>
					<TextField
						variant='outlined'
						label='Mot de passe'
						value={values.password}
						type={values.showPassword ? 'text' : 'password'}
						onChange={handleChange('password')}
						fullWidth
						style={{
							marginTop: 20
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										edge='end'
										aria-label='toggle password visibility'
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										{values.showPassword ? (
											<i className='uil uil-eye-slash' />
										) : (
											<i className='uil uil-eye' />
										)}
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
					<Button
						fullWidth
						onClick={handleSubmit}
						style={{
							marginTop: 15,
							color: 'white',
							backgroundColor: '#46B04A'
						}}
					>
						Connexion
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default LoginAdmin;
