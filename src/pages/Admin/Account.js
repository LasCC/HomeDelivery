import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Divider,
	Box,
	Breadcrumbs,
	TextField,
	Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DrawerDashboardAdmin from '../../components/DrawerDashboardAdmin';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#F4F6F3',
		boxShadow: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		borderRight: 0,
		zIndex: 1
	},
	drawerContainer: {
		overflow: 'auto'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(5),
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
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<Box display='flex' alignItems='center'>
						<img src='https://svgur.com/i/Jg4.svg' alt='logoHomedeliveryBlanc' style={{ height: 40 }} />
						<Box>
							<Typography style={{ color: 'black', fontWeight: 'bold', marginLeft: 10 }}>
								HomeDelivery
							</Typography>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<DrawerDashboardAdmin />
				</div>
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
