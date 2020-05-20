import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';

export default (props) => {
	return (
		<Box style={{ padding: 20, marginTop: 25 }}>
			<img
				src='https://i.imgur.com/f3F04uB.png'
				alt='avatarUser'
				style={{ height: 80, width: 80, borderRadius: 80, objectFit: 'cover' }}
			/>
			<Typography variant='h6' component='h1' style={{ marginTop: 15, fontWeight: 'bold' }}>
				Bonjour [Ludovic]
			</Typography>
			<Link to={ROUTE.ANNONCE} style={{ textDecoration: 'none' }}>
				<Button
					fullWidth
					endIcon={<i className='uil uil-plus' style={{ fontSize: 15, fontWeight: 'bold' }} />}
					style={{
						padding: 10,
						marginTop: 15,
						color: 'white',
						fontWeight: 'bold',
						textTransform: 'none',
						backgroundColor: '#46B04A',
						boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.15)'
					}}
				>
					Créer une annonce
				</Button>
			</Link>
			<Box style={{ padding: 15, marginTop: 15 }}>
				<Typography style={{ color: '#82867D', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 15 }}>
					Menu
				</Typography>
				<Link to={ROUTE.DASHBOARD} style={{ textDecoration: 'none' }}>
					<Box
						style={{
							padding: 10,
							marginTop: 15,
							marginBottom: 15,
							color: '#82867D',
							cursor: 'pointer'
						}}
						display='flex'
						alignItems='center'
						className='HoverTextColor'
					>
						<i className='uil uil-create-dashboard' style={{ fontSize: 20, marginRight: 10 }} />
						<Typography>Dashboard</Typography>
					</Box>
				</Link>
				<Link to={ROUTE.DASHBOARD_SETTINGS} style={{ textDecoration: 'none' }}>
					<Box
						style={{
							padding: 10,
							marginTop: 15,
							marginBottom: 15,
							color: '#82867D',
							cursor: 'pointer'
						}}
						display='flex'
						alignItems='center'
						className='HoverTextColor'
					>
						<i className='uil uil-user-circle' style={{ fontSize: 20, marginRight: 10 }} />
						<Typography>Compte utilisateur</Typography>
					</Box>
				</Link>
				<Link to={ROUTE.DASHBOARD_HISTORY} style={{ textDecoration: 'none' }}>
					<Box
						style={{
							padding: 10,
							marginTop: 15,
							marginBottom: 15,
							color: '#82867D',
							cursor: 'pointer'
						}}
						display='flex'
						alignItems='center'
						className='HoverTextColor'
					>
						<i className='uil uil-history' style={{ fontSize: 20, marginRight: 10 }} />
						<Typography>Historique</Typography>
					</Box>
				</Link>
			</Box>
			<Box style={{ padding: 15 }}>
				<Typography
					style={{
						color: '#82867D',
						textTransform: 'uppercase',
						fontWeight: 'bold',
						fontSize: 15
					}}
				>
					Aide
				</Typography>
				<Link to={ROUTE.DASHBOARD_QUESTIONS} style={{ textDecoration: 'none' }}>
					<Box
						style={{
							padding: 10,
							marginTop: 15,
							marginBottom: 15,
							color: '#82867D',
							cursor: 'pointer'
						}}
						display='flex'
						alignItems='center'
						className='HoverTextColor'
					>
						<i className='uil uil-comment-question' style={{ fontSize: 20, marginRight: 10 }} />
						<Typography>Questions récurrentes</Typography>
					</Box>
				</Link>
				<Link to={ROUTE.DASHBOARD_CONTACT} style={{ textDecoration: 'none' }}>
					<Box
						style={{
							padding: 10,
							marginTop: 15,
							marginBottom: 15,
							color: '#82867D',
							cursor: 'pointer'
						}}
						display='flex'
						alignItems='center'
						className='HoverTextColor'
					>
						<i className='uil uil-mailbox' style={{ fontSize: 20, marginRight: 10 }} />
						<Typography>Nous contacter</Typography>
					</Box>
				</Link>
				<Box
					style={{
						padding: 10,
						marginTop: 15,
						marginBottom: 15,
						color: '#82867D',
						cursor: 'pointer'
					}}
					display='flex'
					alignItems='center'
					className='HoverTextColor'
				>
					<i className='uil uil-sign-out-alt' style={{ fontSize: 20, marginRight: 10 }} />
					<Typography>Déconnexion</Typography>
				</Box>
			</Box>
		</Box>
	);
};
