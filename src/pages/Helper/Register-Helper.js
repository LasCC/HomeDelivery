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
				<Grid item xs={12} xl={3} md={3} sm={12}>
					<Box
						style={{
							height: '94.6vh',
							boxShadow:
								'0 0.7px 2.2px rgba(0, 0, 0, 0.024) , 0 -0.5px 6px rgba(0, 0, 0, 0.035) , 0 -0.4px 14.5px rgba(0, 0, 0, 0.046) , 0 54px 48px rgba(0, 0, 0, 0.07)',
							zIndex: 2,
							backgroundColor: '#18B074',
							padding: 25
						}}
						className='backgroundRegister'
					>
						<img src='http://svgur.com/i/Jqv.svg' alt='logoHomedeliveryBlanc' style={{ height: 40 }} />
						<Box display='flex' alignItems='center' style={{ height: '85%' }}>
							<Box>
								<Typography style={{ color: 'white' }}>Trouver du texte a mettre ici</Typography>
								<Typography color='textSecondary'>Avec un paragraph ici</Typography>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} xl={9} md={9} sm={12}>
					<Box
						style={{ height: '94.6vh', zIndex: 1 }}
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
								fullWidth
								value={values.firstname} // value.age value.Fname value.Lname
								onChange={handleChange('firstname')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
							<TextField
								label='Prénom'
								variant='outlined'
								fullWidth
								value={values.lastname} // value.age value.Fname value.Lname
								onChange={handleChange('lastname')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='Adresse email'
								variant='outlined'
								fullWidth
								value={values.mail} // value.age value.Fname value.Lname
								onChange={handleChange('mail')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='Mot de passe'
								variant='outlined'
								type='password'
								fullWidth
								value={values.password} // value.age value.Fname value.Lname
								onChange={handleChange('password')}
								style={{ marginTop: 15, marginBottom: 15 }}
							/>
							<TextField
								label='N° de téléphone'
								variant='outlined'
								fullWidth
								value={values.phone_number} // value.age value.Fname value.Lname
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
