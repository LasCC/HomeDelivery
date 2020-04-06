import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Toolbar, Typography, Divider, InputBase, IconButton, Box } from '@material-ui/core';
import DrawerDashboardHelper from '../../components/DrawerDashboardHelper';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import MapDev from '../../components/MapDev';
window.document.title = 'HomeDelivery - Annonces';

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
				<Typography variant='h6' component='h1'>
					Toutes les annonces près de votre position
				</Typography>
				<Typography color='textSecondary' variant='paragraph'>
					Pour aider une personne dans le besoin, cliquez simplement sur une box en bas de la map et laissez
					vous guider.
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 15 }} />
				<Box
					style={{
						position: '-webkit-sticky',
						position: 'sticky',
						top: 0,
						height: '90vh',
						backgroundColor: '#3D9EFE7'
					}}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<MapDev />
				</Box>
			</main>
		</div>
	);
};
