import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Toolbar, Typography, Divider, InputBase, IconButton, Box } from '@material-ui/core';
import DrawerDashboardClient from '../../components/DrawerDashboardClient';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = 'HomeDelivery - Historique';

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
		backgroundColor: 'white',
		boxShadow: '-8px 0px 18px 0px rgba(0,0,0,0.05)',
		zIndex: 2,
		height: '100vh'
	}
}));

export default (props) => {
	const classes = useStyles();
	const [ values, setValues ] = useState({
		input: ''
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
				<Typography variant='h6' component='h1'>
					Historique de vos annonces postées
				</Typography>
				<Typography color='textSecondary' variant='paragraph'>
					Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at feli nare nisl.
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 15 }} />
				<Box style={{ marginTop: 25, padding: 15 }}>
					<Box
						style={{
							backgroundColor: 'white',
							padding: 25,
							marginTop: 15,
							borderRadius: 10,
							border: 'solid 1px rgba(0, 0, 0, 0.10)',
							boxShadow:
								'0 2px 2.3px rgba(0, 0, 0, 0.011),  0 3.4px 5.6px rgba(0, 0, 0, 0.016),  0 5.1px 10.7px rgba(0, 0, 0, 0.02),  0 8.5px 19.1px rgba(0, 0, 0, 0.024),  0 18.7px 35.4px rgba(0, 0, 0, 0.029),  0 100px 80px rgba(0, 0, 0, 0.04)'
						}}
						display='flex'
						alignItems='center'
					>
						<Box>
							<img
								src='https://source.unsplash.com/random'
								alt='imageHistorique'
								style={{ height: 125, width: 125, borderRadius: 10 }}
							/>
						</Box>
						<Box
							style={{
								marginLeft: 15
							}}
						>
							<Typography varaiant='h6' component='h1' style={{ fontWeight: 'bold' }}>
								Annonce le {moment().format('DD MMMM YYYY')}
							</Typography>
							<Typography varaiant='h6' component='h1' style={{ marginTop: 10, marginBottom: 10 }}>
								<i className='uil uil-map-marker' /> [Adresse dans le localstorage]
							</Typography>
							<Typography variant='paragraph' color='textSecondary'>
								Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at feli nare nisl.
							</Typography>
						</Box>
					</Box>
				</Box>
			</main>
		</div>
	);
};
