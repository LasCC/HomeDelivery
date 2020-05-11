import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, CssBaseline, Typography, Divider, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
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
				<Box style={{ height: '80vh' }} display='flex' alignItems='center' justifyContent='center'>
					<Box>
						<Typography color='textSecondary' variant='h6' component='h1' style={{ textAlign: 'center' }}>
							Ravis de vous revoir parmi nous [Ludovic]
						</Typography>
						<Typography variant='h4' component='h1' style={{ fontWeight: 'bold', textAlign: 'center' }}>
							Que souhaitez-vous faire aujourd’hui ?
						</Typography>
						<Box style={{ marginTop: 25 }} display='flex' alignItems='center'>
							<Box
								className='card'
								style={{
									height: 200,
									width: 200,
									backgroundColor: '#D7FFF1',
									borderRadius: 10,
									margin: 10
								}}
							>
								<Link to={ROUTE.DASHBOARD_ADMIN_USERS} style={{ textDecoration: 'none' }}>
									<Box
										display='flex'
										justify='center'
										alignItems='center'
										style={{
											height: '100%',
											backgroundImage: "url('https://svgur.com/i/KAb.svg')",
											backgroundPosition: 'right',
											backgroundSize: 'cover',
											borderRadius: '10px'
										}}
									>
										<Typography
											style={{
												fontWeight: 'bolder',
												color: '#1f2d3d',
												opacity: 1
											}}
											variant='h6'
											component='h2'
										>
											Consultez <br />les utilisateurs
										</Typography>
									</Box>
								</Link>
							</Box>
							<Box
								className='card'
								style={{
									height: 200,
									width: 450,
									backgroundColor: '#048A81',
									borderRadius: 10,
									margin: 10
								}}
							>
								<Link to={ROUTE.DASHBOARD_ADMIN_ANALYTICS} style={{ textDecoration: 'none' }}>
									<Box
										display='flex'
										justify='center'
										alignItems='center'
										style={{
											height: '100%',
											backgroundImage: "url('https://svgur.com/i/KAw.svg')",
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											borderRadius: '10px'
										}}
									>
										<Typography
											style={{ fontWeight: 'bold', color: '#fff', opacity: 1 }}
											variant='h6'
											component='h2'
										>
											Carte interactive
										</Typography>
									</Box>
								</Link>
							</Box>
							<Link to={ROUTE.DASHBOARD_ADMIN_ACCOUNT} style={{ textDecoration: 'none' }}>
								<Box
									className='card'
									style={{
										height: 200,
										width: 178,
										backgroundColor: '#E1FAF9',
										borderRadius: 10,
										margin: 10
									}}
								>
									<Box display='flex' justify='center' alignItems='center' style={{ height: '100%' }}>
										<Typography
											style={{ fontWeight: 'bold', color: '#1f2d3d', opacity: 0.9 }}
											variant='h6'
											component='h2'
										>
											Compte
										</Typography>
									</Box>
								</Box>
							</Link>
						</Box>
						<Box display='flex' alignItems='center'>
							<Box
								className='card'
								flexGrow={1}
								style={{
									height: 200,
									backgroundColor: '#F4C3C2',
									borderRadius: 10,
									margin: 10
								}}
							>
								<Link
									to={ROUTE.DASHBOARD_HISTORY_HELPER}
									style={{ textDecoration: 'none', width: '100%' }}
								>
									<Box
										display='flex'
										justify='center'
										alignItems='center'
										style={{
											height: '100%',
											backgroundImage: "url('https://svgur.com/i/KAa.svg')",
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'left',
											backgroundPositionX: '-6em',
											borderRadius: '10px'
										}}
									>
										<Typography
											style={{ fontWeight: 'bold', color: 'white', opacity: 1 }}
											variant='h6'
											component='h2'
										>
											Data vision
										</Typography>
									</Box>
								</Link>
							</Box>
							<Box
								className='card'
								style={{
									height: 200,
									width: 175,
									backgroundColor: '#add9cd',
									borderRadius: 10,
									margin: 10
								}}
							>
								<Box display='flex' justify='center' alignItems='center' style={{ height: '100%' }}>
									<Typography
										style={{ fontWeight: 'bold', color: '#1f2d3d', opacity: 0.9 }}
										variant='h6'
										component='h2'
									>
										Déconnexion
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</main>
		</div>
	);
};
