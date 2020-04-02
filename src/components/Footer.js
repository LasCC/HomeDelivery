import React from 'react';
import { Container, Typography, Grid, Divider, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';

export default (props) => {
	return (
		<Container>
			<Grid container spacing={2} style={{ padding: 30 }}>
				<Grid item xs={4}>
					<Typography variant='h1' style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase' }}>
						Menu
					</Typography>
					<Divider style={{ backgroundColor: '#4A7968', height: 3, width: '50%' }} />
					<Link to={ROUTE.HOME} hash='#the-hash'>
						<Typography style={{ marginTop: 15, marginBottom: 15 }}>Accueil</Typography>
					</Link>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>Comment ça marche?</Typography>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>
						Respect des consignes sanitaires
					</Typography>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>Activité</Typography>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>Questions récurrentes</Typography>
					<Typography>Contact</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h1' style={{ fontSize: 20, fontWeight: 'bold' }}>
						Nous contacter
					</Typography>
					<Divider style={{ backgroundColor: '#4A7968', height: 3, width: '50%' }} />
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>mail@ubermachin.com</Typography>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>+33 6 03 87 64 36 </Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h1' style={{ fontSize: 20, fontWeight: 'bold' }}>
						Nous suivre
					</Typography>
					<Divider style={{ backgroundColor: '#4A7968', height: 3, width: '50%' }} />
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>Facebook</Typography>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>Twitter</Typography>
					<Typography style={{ marginTop: 15, marginBottom: 15 }}>Instagram</Typography>
				</Grid>
			</Grid>
			<Box display='flex' alignItems='center' style={{ padding: 30 }}>
				<Box flexGrow={1} display='flex' alignItems='center'>
					<img src='https://svgur.com/i/JV2.svg' style={{ height: 35, marginRight: 15 }} alt='logo' />
					<Typography variant='h1' style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>
						HomeDelivery
					</Typography>
				</Box>
				<Box display='flex' alignItems='center'>
					<Typography color='textSecondary' style={{ fontSize: 15 }}>
						@ ESTIAM 2020
					</Typography>
				</Box>
			</Box>
		</Container>
	);
};
