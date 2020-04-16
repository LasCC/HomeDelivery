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
	Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import DrawerDashboardClient from '../../components/DrawerDashboardClient';
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
						placeholder='Rechercher un livreur près de chez vous'
						inputProps={{ 'aria-label': 'Rechercher un livreur près de chez vous' }}
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
				<DrawerDashboardClient />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Box style={{ backgroundColor: '#D9EFE7', padding: 35, borderRadius: 15, width: '100%' }}>
					<Typography variant='h6' component='h1'>
						Ravis de vous revoir <strong>[Ludovic]</strong>
					</Typography>
					<Typography color='textSecondary'>
						Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at feli nare nisl.
					</Typography>
				</Box>
			</main>
		</div>
	);
};
