import React from 'react';
import { Box, Typography, Button, Divider, IconButton } from '@material-ui/core';
import Drawer from './Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';

export default (props) => {
	return (
		<div>
			<Box display='flex' alignItems='center'>
				<Drawer />
				<Box p={2} flexGrow={1} display='flex' alignItems='center' style={{ marginLeft: 10 }}>
					<img src='https://svgur.com/i/Jg4.svg' style={{ height: 35, marginRight: 15 }} alt='logo' />
					<Link to={ROUTE.HOME} style={{ textDecoration: 'none', color: 'black' }}>
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
					<Link to={ROUTE.LOGIN} style={{ textDecoration: 'none', color: '#18B074' }}>
						<Typography
							style={{
								padding: 13,
								marginRight: 15,
								color: '#18B074',
								fontWeight: 'bold',
								textTransform: 'capitalize'
							}}
						>
							Connexion
						</Typography>
					</Link>
					<Link to={ROUTE.REGISTER} style={{ textDecoration: 'none' }}>
						<Button
							style={{
								backgroundColor: '#18B074',
								padding: 13,
								borderRadius: 8,
								boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.15)'
							}}
						>
							<Typography
								style={{
									fontWeight: 'bold',
									color: 'white',
									textTransform: 'capitalize'
								}}
							>
								Inscription gratuite
							</Typography>
						</Button>
					</Link>
				</Box>
			</Box>
		</div>
	);
};
