import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from 'date-fns/locale/fr';
import ROUTE from '../../Routes';
import Carousel_Text from '../../components/Carousel_Text';
window.document.title = 'HomeDelivery - Création de compte bénévole';

export default (props) => {
	const [ selectedDate, setSelectedDate ] = React.useState(new Date('2014-08-18T21:11:54'));
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
	const handleDateChange = (date) => {
		setSelectedDate(date);
		setValues({ ...values, date_naissance: date });
	};
	const handleSubmit = () => {
		console.log('====== Registration HELPER ======');
		console.log(values);
	};
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={5} md={5} sm={12}>
					<Box style={{ height: '100vh' }} display='flex' alignItems='center' justifyContent='center'>
						<Box style={{ padding: 25, width: '55%' }}>
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
							<MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
								<KeyboardDatePicker
									label='Date de naissance'
									inputVariant='outlined'
									format='dd/MM/yyyy'
									fullWidth
									style={{ marginTop: 15, marginBottom: 15 }}
									value={values.date_naissance}
									onChange={handleDateChange}
									KeyboardButtonProps={{
										'aria-label': 'date de naissance'
									}}
								/>
							</MuiPickersUtilsProvider>
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
