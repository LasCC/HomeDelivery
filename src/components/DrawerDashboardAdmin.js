import React from 'react';
import { Box, Typography, List, ListItemIcon, ListItemText, ListItem, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MapIcon from '@material-ui/icons/Map';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertChartIcon from '@material-ui/icons/InsertChart';

export default (props) => {
	return (
		<Box style={{ padding: 20, marginTop: 25 }}>
			<Box style={{ textAlign: 'center', marginBottom: 15 }}>
				<img
					src='https://i.imgur.com/f3F04uB.png'
					alt='avatarUser'
					style={{ height: 80, width: 80, borderRadius: 80, objectFit: 'cover' }}
				/>
				<Typography variant='h6' component='h1' style={{ marginTop: 15, fontWeight: 'bold', color: 'white' }}>
					Bonjour [Ludovic]
				</Typography>
				<Typography style={{ color: '#f2f2f2' }}>Administrateur</Typography>
			</Box>
			<Divider style={{ marginTop: 15, marginBottom: 5 }} />
			<List>
				<Link to={ROUTE.DASHBOARD_ADMIN} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem button style={{ marginTop: 15, marginBottom: 15 }}>
						<ListItemIcon>
							<DashboardIcon style={{ color: '#ededed' }} />
						</ListItemIcon>
						<ListItemText>Dashboard</ListItemText>
					</ListItem>
				</Link>
				<Link to={ROUTE.DASHBOARD_ADMIN_ANALYTICS} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem button style={{ marginTop: 15, marginBottom: 15 }}>
						<ListItemIcon>
							<MapIcon style={{ color: '#ededed' }} />
						</ListItemIcon>
						<ListItemText>Carte</ListItemText>
					</ListItem>
				</Link>

				{/* <Link to={ROUTE.DASHBOARD_ADMIN_DATAVIZ} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem button style={{ marginTop: 15, marginBottom: 15 }}>
						<ListItemIcon>
							<InsertChartIcon style={{ color: '#ededed' }} />
						</ListItemIcon>
						<ListItemText>Data vision</ListItemText>
					</ListItem>
				</Link> */}

				<Link to={ROUTE.DASHBOARD_ADMIN_USERS} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem button style={{ marginTop: 15, marginBottom: 15 }}>
						<ListItemIcon>
							<SupervisedUserCircleIcon style={{ color: '#ededed' }} />
						</ListItemIcon>
						<ListItemText>Utilisateurs</ListItemText>
					</ListItem>
				</Link>
				<Link to={ROUTE.DASHBOARD_ADMIN_ACCOUNT} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem button style={{ marginTop: 15, marginBottom: 15 }}>
						<ListItemIcon>
							<SettingsIcon style={{ color: '#ededed' }} />
						</ListItemIcon>
						<ListItemText>Compte</ListItemText>
					</ListItem>
				</Link>
				<Link to={ROUTE.DASHBOARD_ADMIN_LOGIN} style={{ textDecoration: 'none', color: 'white' }}>
					<ListItem button style={{ marginTop: 15, marginBottom: 15 }}>
						<ListItemIcon>
							<ExitToAppIcon style={{ color: '#ededed' }} />
						</ListItemIcon>
						<ListItemText>Déconnexion</ListItemText>
					</ListItem>
				</Link>
			</List>
		</Box>
	);
};
