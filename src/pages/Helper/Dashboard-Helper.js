import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	CssBaseline,
	Toolbar,
	Typography,
	Divider,
	InputBase,
	IconButton,
	Box,
	Button,
	Grid
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';

import DrawerDashboardHelper from '../../components/DrawerDashboardHelper';
import CardHistory from '../../components/CardHistory';
window.document.title = 'HomeDelivery - Dashbord';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		zIndex: 3,
		backgroundColor: 'white'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		marginTop: 3,
		zIndex: 3
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#F4F6F3',
		borderRight: 0,
		zIndex: 1
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(8),
		boxShadow: '-8px 0px 18px 0px rgba(0,0,0,0.05)',
		minHeight: '100vh',
		zIndex: 2
	}
}));

export default (props) => {
	const classes = useStyles();
	const [ values, setValues ] = useState({
		search: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Box position='fixed' className={classes.appBar}>
				<Toolbar>
					<i className='uil uil-search' style={{ fontSize: 25, color: '#82867D' }} />
					<InputBase
						onChange={handleChange('search')}
						className={classes.input}
						placeholder='Rechercher une adresse'
						inputProps={{ 'aria-label': 'Rechercher une adresse' }}
					/>
					<IconButton type='submit' className={classes.iconButton} aria-label='search'>
						<i className='uil uil-arrow-right' style={{ fontSize: 25, color: '#82867D' }} />
					</IconButton>
				</Toolbar>
			</Box>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper
				}}
				anchor='left'
			>
				<Box className={classes.toolbar}>
					<img
						src='https://svgur.com/i/Jg4.svg'
						alt='logoHomeDelivery'
						style={{ marginLeft: 13, marginTop: 13 }}
					/>
				</Box>
				<Divider />
				<DrawerDashboardHelper />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container>
					<Grid xs={6}>
						<Box className='card'>
							<Box className='card-content' p={3}>
								<Box display='flex' alignItems='center'>
									<Box flexGrow={1}>
										<Typography className='name' variant='h6' component='h1'>
											Annonce
										</Typography>
									</Box>
									<Box className='date'>
										<Typography>15 avril 2020</Typography>
									</Box>
								</Box>
								<Box className='bottom'>
									<Typography
										variant='h5'
										component='h2'
										style={{ fontWeight: 'bold', marginTop: 15 }}
									>
										L'application mobile de HomeDelivery est disponible !
									</Typography>
								</Box>
							</Box>
							<Box className='card-bg'>
								<img
									className='bg-img'
									src='https://cdn.stocksnap.io/img-thumbs/960w/SKI2T9YF2P.jpg'
									alt='leafs'
								/>
							</Box>
							<Box className='shadow'>
								<img
									className='shadow-img'
									src='https://cdn.stocksnap.io/img-thumbs/960w/SKI2T9YF2P.jpg'
									alt='leafs'
								/>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Box style={{ marginTop: 15, padding: 35 }}>
					<Box style={{ marginTop: 15, marginBottom: 15 }}>
						<Typography variant='h6' component='h1'>
							<i className='uil uil-check-circle' /> Faire une bonne action
						</Typography>
						<Divider style={{ marginTop: 15, marginBottom: 15 }} />
						<Typography color='textSecondary'>
							Si vous voulez faire une bonne action, n'hésitez pas à aider vos proches, voire même des
							inconnues, pour ce faire veuillez vous rendre sur la page "annonce" et cliquer sur l'une des
							boxes en bas de votre écran et laissez-vous guider.
						</Typography>
						<br />
						<Link to={ROUTE.DASHBOARD_HELPER_ANNONCE} style={{ textDecoration: 'none' }}>
							<Button
								endIcon={
									<i
										className='uil uil-map'
										style={{ fontSize: 15, fontWeight: 'bold', color: '#46B04A' }}
									/>
								}
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
								Voir les annonces disponibles
							</Button>
						</Link>
					</Box>
				</Box>
			</main>
		</div>
	);
};
