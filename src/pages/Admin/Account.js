import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Toolbar,
	Typography,
	Divider,
	Box,
	Breadcrumbs,
	TextField,
	Button,
	Drawer,
	CssBaseline,
	InputBase,
	IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DrawerDashboardAdmin from '../../components/DrawerDashboardAdmin';
window.document.title = 'HomeDelivery - Confiuration de votre compte';

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
	const classes = useStyles();
	const [ values, setValues ] = useState({
		search: '',
		firstname: '',
		lastname: '',
		mail: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const handleSubmit = () => {
		console.log('====== Registration HELPER ======');
		console.log(values);
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
					<img
						src='https://svgur.com/i/Jg4.svg'
						alt='logoHomeDelivery'
						style={{ marginLeft: 13, marginTop: 13 }}
					/>
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
							<i className='uil uil-setting' /> Compte utilisateur
						</Typography>
					</Link>
				</Breadcrumbs>
				<Typography variant='h6' component='h1'>
					<i className='uil uil uil-setting' /> Paramètre de votre compte administrateur
				</Typography>
				<Typography color='textSecondary'>
					Mauris aliquet scelerisque blandit. Morbi laoreet, tortor at convallis laoreet, augue nibh cursus
					mauris, eget faucibus ex nibh a sem.
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 25 }} />
				<TextField
					label='Nom'
					variant='outlined'
					fullWidth
					value={values.firstname}
					onChange={handleChange('firstname')}
					style={{ marginTop: 15, marginBottom: 15 }}
				/>
				<TextField
					label='Prénom'
					variant='outlined'
					fullWidth
					value={values.lastname}
					onChange={handleChange('lastname')}
					style={{ marginTop: 15, marginBottom: 15 }}
				/>
				<TextField
					label='Adresse email'
					variant='outlined'
					fullWidth
					value={values.mail}
					onChange={handleChange('mail')}
					style={{ marginTop: 15, marginBottom: 15 }}
				/>
				<TextField
					label='Mot de passe'
					variant='outlined'
					type='password'
					fullWidth
					value={values.password}
					onChange={handleChange('password')}
					style={{ marginTop: 15, marginBottom: 15 }}
				/>
				<Button
					onClick={handleSubmit}
					style={{
						backgroundColor: 'rgb(70, 176, 74)',
						color: 'white',
						fontWeight: 'bold',
						marginTop: 15,
						padding: 15,
						borderRadius: 4,
						boxShadow: 'rgba(24, 176, 116, 0.15) 0px 9px 18px 3px'
					}}
				>
					Modifier vos paramètres <i className='uil uil-save' />
				</Button>
			</main>
		</div>
	);
};
