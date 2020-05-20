import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	InputBase,
	Toolbar,
	CssBaseline,
	Typography,
	Box,
	IconButton,
	Divider,
	Breadcrumbs
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ROUTE from '../../Routes';
import Map from '../../components/Map';
import DrawerDashboardAdmin from '../../components/DrawerDashboardAdmin';
window.document.title = 'HomeDelivery - Carte intéractive';

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
		backgroundColor: '#388E3B',
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
	const [ values, setValues ] = useState({
		search: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Box position='fixed' className={classes.appBar}>
				<Toolbar>
					<i className='uil uil-search' style={{ fontSize: 25, color: '#82867D' }} />
					<InputBase
						onChange={handleChange('search')}
						className={classes.input}
						placeholder='Rechercher un utilisateur'
						inputProps={{ 'aria-label': 'Rechercher un utilisateur' }}
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
				<Box className={classes.toolbar} style={{ backgroundColor: '#2E7D32' }}>
					<Typography style={{ marginLeft: 25, marginTop: 20, color: 'white', fontWeight: 'bold' }}>
						HomeDelivery - Administration
					</Typography>
				</Box>
				<Divider />
				<DrawerDashboardAdmin />
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize='small' />}
					aria-label='breadcrumb'
					style={{ marginBottom: 25 }}
				>
					<Link to={ROUTE.DASHBOARD_ADMIN} style={{ textDecoration: 'none' }}>
						<Typography color='textSecondary'>
							<i className='uil uil-create-dashboard' /> Dashboard
						</Typography>
					</Link>
					<Link style={{ textDecoration: 'none' }}>
						<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
							<i className='uil uil-map' /> Carte intéractive
						</Typography>
					</Link>
				</Breadcrumbs>
				<Typography variant='h6' component='h1'>
					<i className='uil uil-user-location' /> Tous les utilisateurs de l'application
				</Typography>
				<Typography color='textSecondary'>
					Affichage en temps réel de tous les utilisateurs de l'application répartie sur une carte interactive
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 25 }} />
				<Box
					style={{ height: '80vh', width: '80vw' }}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<Map />
				</Box>
			</main>
		</div>
	);
};
