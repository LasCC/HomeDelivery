import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, Toolbar, Typography, Divider, InputBase, IconButton, Box, Grid } from '@material-ui/core';
import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries,
	DiscreteColorLegend
} from 'react-vis';
import DrawerDashboardAdmin from '../../components/DrawerDashboardAdmin';
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
		search: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const BarSeries = VerticalBarSeries;
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
				<Box
					style={{ height: '80vh', width: '80vw' }}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<XYPlot
						className='clustered-stacked-bar-chart-example'
						xType='ordinal'
						stackBy='y'
						width={300}
						height={300}
					>
						<DiscreteColorLegend
							style={{ position: 'absolute', left: '50px', top: '10px' }}
							orientation='horizontal'
							items={[
								{
									title: 'benevole',
									color: '#12939A'
								},
								{
									title: 'classique',
									color: '#79C7E3'
								}
							]}
						/>
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis />
						<YAxis />
						<BarSeries color='#46B04A' data={[ { x: 'Bénévoles', y: 365 } ]} />
						<BarSeries color='#79C7E3' data={[ { x: 'Classique', y: 325 } ]} />
					</XYPlot>
				</Box>
			</main>
		</div>
	);
};
