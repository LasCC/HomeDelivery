import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Drawer,
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Divider,
	Box,
	Dialog,
	DialogTitle,
	DialogContent,
	FormControl,
	Select,
	DialogActions,
	Button,
	InputLabel,
	MenuItem,
	Breadcrumbs
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../../Routes';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import DrawerDashboardAdmin from '../../components/DrawerDashboardAdmin';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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
	const [ values, setValues ] = React.useState({
		step_update: ''
	});

	const handleChange = (event) => {
		setValues((oldValues) => ({
			...oldValues,
			[event.target.name]: event.target.value
		}));
	};
	const handleClickOpen = () => {
		setState({ ...state, open: true });
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};
	const [ state, setState ] = React.useState({
		columns: [
			{ title: 'Name', field: 'name' },
			{ title: 'Surname', field: 'surname' },
			{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
			{
				title: 'Birth Place',
				field: 'birthCity',
				lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
			}
		],
		data: [
			{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
			{
				name: 'Zerya Betül',
				surname: 'Baran',
				birthYear: 2017,
				birthCity: 34
			}
		]
	});

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
							<i className='uil-user-circle' /> Utilisateurs
						</Typography>
					</Link>
				</Breadcrumbs>
				<Typography variant='h6' component='h1'>
					<i className='uil uil-user-circle' /> Tous les utilisateurs actifs de l'application
				</Typography>
				<Typography color='textSecondary'>
					Mauris aliquet scelerisque blandit. Morbi laoreet, tortor at convallis laoreet, augue nibh cursus
					mauris, eget faucibus ex nibh a sem.
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 25 }} />
				<MaterialTable
					id='Table'
					icons={tableIcons}
					title='Utilisateurs de HomeDelivery'
					columns={state.columns}
					data={state.data}
					columns={[
						{
							title: "Photo d'identité",
							field: 'avatar',
							render: (query) => (
								<img
									style={{ height: 60, width: 60, borderRadius: '50%' }}
									src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
									alt='avatar'
								/>
							)
						},
						{ title: 'Nom', field: 'firstname' },
						{ title: 'Prénom', field: 'lastname' },
						{
							title: 'Type',
							field: 'type'
						},
						{
							title: 'Ville',
							field: 'city'
						},
						{
							title: 'Annonces',
							field: 'annonces'
						},
						{
							title: 'Date de naissance',
							field: 'birthDate'
						}
					]}
					data={[
						{
							firstname: 'Mehmet',
							lastname: 'Baran',
							type: 'Bénévole',
							city: 'Rambouillet',
							annonces: 6,
							birthDate: '08/03/1995'
						},
						{
							firstname: 'Zerya Betül',
							lastname: 'Bougandere',
							type: 'Classique',
							city: 'Paris 11e',
							annonces: 2,
							birthDate: '12/11/1998'
						}
					]}
					actions={[
						{
							icon: 'dashboardicon',
							tooltip: "Mettre à jour l'utilisateur",
							onClick: (event, query) => {
								handleClickOpen();
								console.log('ping pong ching cheng');
							}
						},
						{
							icon: 'trash',
							tooltip: "Supprimer l'utilisateur",
							onClick: (event, query) => {
								alert("Vous avez supprimer l'utilisateur");
							}
						}
					]}
					localization={{
						body: {
							deleteTooltip: 'Supprimer',
							editTooltip: 'Edit',
							emptyDataSourceMessage: 'Aucun utilisateur trouvé',
							editRow: {
								deleteText: 'Êtes-vous sur de bien vouloir faire ça ?',
								cancelTooltip: 'Annuler',
								saveTooltip: 'Confirmer'
							}
						},
						toolbar: {
							exportTitle: 'Exporter la liste',
							searchTooltip: 'Rechercher un utilisateur',
							exportName: 'Exporter au format CSV',
							searchPlaceholder: 'Rechercher un utilisateur'
						},
						pagination: {
							labelRowsSelect: 'rangées',
							labelDisplayedRows: '{from}-{to} sur {count}',
							firstTooltip: 'Première page',
							previousTooltip: 'Précédent',
							nextTooltip: 'Suivant',
							lastTooltip: 'Dernière page',
							toolbarExportTitle: 'Exporter'
						}
					}}
					options={{
						actionsColumnIndex: -1,
						exportButton: true,
						exportFileName: 'export_user_dashboard',
						headerStyle: {
							backgroundColor: '#46B04A',
							color: 'white'
						}
					}}
				/>
				<Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
					<DialogTitle>Mettre à jour le compte de l'utilisateur</DialogTitle>
					<DialogContent>
						<form>
							<FormControl style={{ height: '25vh', width: '100%' }}>
								<InputLabel>Veuillez sélectionner une valeur</InputLabel>
								<Select
									value={values.step_update}
									onChange={handleChange}
									inputProps={{
										name: 'step_update'
									}}
								>
									<MenuItem value={0}>Compte bénévole</MenuItem>
									<MenuItem value={1}>Compte classique</MenuItem>
									<MenuItem value={2}>Supprimer</MenuItem>
								</Select>
							</FormControl>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color='secondary'>
							Annuler
						</Button>
						<Button
							onClick={() => {
								console.log('getit');
								handleClose();
							}}
							color='primary'
						>
							Confirmer
						</Button>
					</DialogActions>
				</Dialog>
			</main>
		</div>
	);
};
