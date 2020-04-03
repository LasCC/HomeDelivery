import React from 'react';
import { Box, Typography, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';

export default (props) => {
	return (
		<Container
			maxWidth='xl'
			style={{
				zIndex: 1,
				boxShadow: '0px 8px 8px -5px rgba(0,0,0,0.15)'
			}}
		>
			<Box display='flex' alignItems='center'>
				<Box p={2} flexGrow={1} display='flex' alignItems='center' style={{ marginLeft: 10 }}>
					<img src='https://svgur.com/i/Jg4.svg' style={{ height: 35, marginRight: 15 }} alt='logo' />
					<Link to={ROUTE.HOME} style={{ textDecoration: 'none' }}>
						<Typography variant='h1' noWrap style={{ color: 'black', fontWeight: 'bold', fontSize: 23 }}>
							HomeDelivery
						</Typography>
					</Link>
				</Box>
				<Box
					display={{
						xs: 'none',
						md: 'block',
						lg: 'block',
						xl: 'block',
						sm: 'none'
					}}
					p={2}
					style={{ marginRight: 10, display: 'flex' }}
					alignItems='center'
				>
					<Link to={ROUTE.HOME} style={{ textDecoration: 'none', color: '#18B074' }}>
						<Typography
							style={{
								padding: 13,
								marginRight: 15,
								color: '#18B074',
								fontWeight: 'bold',
								textTransform: 'capitalize'
							}}
						>
							Accueil
						</Typography>
					</Link>
					<Link to={ROUTE.LOGIN} style={{ textDecoration: 'none', color: 'white' }}>
						<Button
							style={{
								backgroundColor: '#18B074',
								padding: 13,
								borderRadius: 8,
								boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.15)',
								color: 'white',
								fontWeight: 'bold',
								textTransform: 'capitalize'
							}}
						>
							Connexion
						</Button>
					</Link>
				</Box>
			</Box>
		</Container>
	);
};
