import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import ROUTE from '../../Routes';
import NavbarRegister from '../../components/NavbarRegister';
import Carousel_Text from '../../components/Carousel_Text';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from 'date-fns/locale/fr';
window.document.title = 'HomeDelivery - Création de compte';

export default (props) => {
	const [ selectedDate, setSelectedDate ] = React.useState();
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
	const handleDateChange = (date) => {
		setSelectedDate(date);
		setValues({ ...values, date_naissance: date });
	};
	const handleSubmit = () => {
		console.log('====== Registration ======');
		console.log(values);
	};
	console.log(values);
	return (
		<div>
			<NavbarRegister />
			<Grid container>
				<Grid item xs={12} xl={5} md={5} sm={12}>
					<Box style={{ height: '90vh' }} display='flex' alignItems='center' justifyContent='center'>
						<Box style={{ padding: 25, width: '70%' }}>
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
									fullWidth
									type='text'
									value={values.firstname}
									onChange={handleChange('firstname')}
									style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Prénom'
									variant='outlined'
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
									fullWidth
									value={values.password}
									onChange={handleChange('password')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Confirmation'
									type='password'
									variant='outlined'
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
									type='email'
									fullWidth
									value={values.mail}
									onChange={handleChange('mail')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Adresse'
									variant='outlined'
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
									fullWidth
									value={values.complement}
									onChange={handleChange('complement')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='Ville'
									variant='outlined'
									fullWidth
									value={values.city}
									onChange={handleChange('city')}
									style={{ marginTop: 15, marginBottom: 15 }}
								/>
							</Box>
							<MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
								<KeyboardDatePicker
									label='Date de naissance'
									inputVariant='outlined'
									format='dd/MM/yyyy'
									fullWidth
									helperText={'Veuillez renseigner une date valide : dd/MM/yyyy'}
									style={{ marginTop: 15, marginBottom: 15 }}
									value={values.date_naissance}
									onChange={handleDateChange}
									KeyboardButtonProps={{
										'aria-label': 'date de naissance'
									}}
								/>
							</MuiPickersUtilsProvider>
							<Box display='flex'>
								<TextField
									label='Code postale'
									variant='outlined'
									fullWidth
									value={values.code_post}
									onChange={handleChange('code_post')}
									style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
								/>
								<TextField
									label='N° de téléphone'
									variant='outlined'
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
				<Grid item xs={12} xl={7} md={7} sm={12} className='backgroundRight'>
					<Box
						style={{ height: '91.8vh' }}
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
