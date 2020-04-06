import React, { useState } from 'react';
import { Grid, TextField, Typography, Box, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Carousel_Text from '../components/Carousel_Text';
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
		<Grid container>
			<Grid item xs={12} xl={5} md={5} sm={12}>
				<Box style={{ height: '100vh' }} display='flex' alignItems='center' justifyContent='center'>
					<Box style={{ padding: 25, width: '55%' }}>
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
							Confirmer
						</Button>
						<Snackbar
							open={open}
							autoHideDuration={4000}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
						>
							<Alert onClose={handleClose} severity='success'>
								Code de confirmation à bien été envoyé
							</Alert>
						</Snackbar>
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
	);
};
