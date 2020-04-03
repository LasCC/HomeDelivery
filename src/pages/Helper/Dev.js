import React, { useState } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import MapDev from '../../components/MapDev';
import Lottie from 'react-lottie';
window.document.title = 'HomeDelivery - dev';

export default (props) => {
	const [ values, setValues ] = useState({
		list: '',
		annexe: '',
		price_min: '',
		payment: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmit = () => {
		console.log('====== LIST COURSES ======');
		console.log(values);
	};
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={6} md={6} sm={12}>
					<Navbar />
				</Grid>
				<Grid item xs={12} xl={6} md={6} sm={12}>
					<Box
						style={{
							position: '-webkit-sticky',
							position: 'sticky',
							top: 0,
							height: '100vh',
							backgroundColor: '3D9EFE7'
						}}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<MapDev />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
