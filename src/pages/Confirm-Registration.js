import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';
window.document.title = "HomeDelivery - Confirmation d'inscription";

export default (props) => {
	function Alert(props) {
		return <MuiAlert elevation={6} variant='filled' {...props} />;
	}
	const [ open, setOpen ] = React.useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const [ values, setValues ] = useState({
		code_confirm: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmitCode = () => {
		setOpen(true);
	};
	const handleSubmit = () => {
		console.log('====== CONFIRM CODE ======');
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
								Confirmation de votre inscription
							</Typography>
							<Typography color='textSecondary'>
								Un code de confirmation vous a été envoyé dans votre boîte de réception [MAIL].
							</Typography>
							<TextField
								label='Code de confirmation'
								variant='outlined'
								fullWidth
								required
								placeholder='OCB8s.Ztagl58BK83LyIV24Smd6Ken7in8f'
								value={values.code_confirm} // value.age value.Fname value.Lname
								onChange={handleChange('code_confirm')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
							<Typography
								onClick={handleSubmitCode}
								variant='h2'
								style={{ color: '#18B074', fontSize: 15, cursor: 'pointer' }}
							>
								Code de confirmation non reçu ?
							</Typography>
							<Link to={ROUTE.LOGIN} style={{ textDecoration: 'none' }}>
								<Button
									onClick={handleSubmit}
									fullWidth
									style={{
										backgroundColor: '#18B074',
										color: 'white',
										fontWeight: 'bold',
										marginTop: 15,
										padding: 15,
										borderRadius: 4
									}}
								>
									Confirmer
								</Button>
							</Link>
							<Snackbar
								open={open}
								autoHideDuration={4000}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right'
								}}
							>
								<Alert onClose={handleClose} severity='success'>
									Code de confirmation à bien été envoyé
								</Alert>
							</Snackbar>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
