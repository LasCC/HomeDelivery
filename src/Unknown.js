import React from 'react';
import { Box, Typography, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Lottie from 'react-lottie';
import ROUTE from './Routes';

const unknown = require('./data/404.json');
const handShakeOptions = {
	loop: false,
	autoplay: true,
	animationData: unknown,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

export default (props) => {
	return (
		<div>
			<Navbar />
			<Box style={{ height: '90vh' }}>
				<Lottie options={handShakeOptions} height={500} width={500} />
				<Typography variant='h5' component='h1' align='center'>
					Oops ! Cette page n'existe plus..
				</Typography>
				<Typography color='textSecondary' style={{ marginTop: 15 }} align='center'>
					Vous avez peut-être mal saisi l'adresse ou la page n'est pas disponible pour le moment
				</Typography>
				<Box display='flex' justifyContent='center'>
					<Link to={ROUTE.HOME} style={{ textDecoration: 'none' }}>
						<Button
							variant='outlined'
							style={{
								padding: 15,
								marginTop: 15,
								color: '#46B04A',
								fontWeight: 'bold',
								textTransform: 'none',
								borderColor: '#46B04A'
							}}
						>
							Revenir à l'accueil
						</Button>
					</Link>
				</Box>
			</Box>
		</div>
	);
};
