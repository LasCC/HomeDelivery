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
	Button,
	TextField,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	FormControl,
	InputLabel,
	Select,
	FormHelperText,
	Breadcrumbs
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ROUTE from '../../Routes';
import DrawerDashboardHelper from '../../components/DrawerDashboardHelper';
import QRCode from 'qrcode.react';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = "HomeDelivery - Générateur d'attestation de déplacement provisoire";

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
	const [ open, setOpen ] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const onlyNumbers = (e) => {
		e.target.value = e.target.value.replace(/^[0-9]{2}[]{1}[0-9]{2}[]{1}[0-9]{4}$/g, '');
	};
	const [ values, setValues ] = useState({
		search: '',
		Nom: '',
		Prenom: '',
		Naissance: '10/11/1990',
		Ville_naissance: '',
		Adresse: '',
		Sortie: '',
		SortieHeure: moment().format('LT'),
		Motifs: ''
	});
	const downloadQR = () => {
		const canvas = document.querySelector('#QRCODE');
		const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
		let downloadLink = document.createElement('a');
		downloadLink.href = pngUrl;
		downloadLink.download = 'Attestation de déplacement provisoire.png';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};
	const qrcodevalue = `Cree le ${moment().format('DD/MM/YYYY')} a ${moment().format(
		'LT'
	)}; Nom: ${values.Nom}; Prenom: ${values.Prenom}; Naissance: ${values.Naissance} a ${values.Ville_naissance}; Adresse: ${values.Adresse}; Sortie: ${values.Sortie} a ${values.SortieHeure}; Motifs: ${values.Motifs}`;
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
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize='small' />}
					aria-label='breadcrumb'
					style={{ marginBottom: 25 }}
				>
					<Link to={ROUTE.DASHBOARD_HELPER} style={{ textDecoration: 'none' }}>
						<Typography color='textSecondary'>
							<i className='uil uil-create-dashboard' /> Dashboard
						</Typography>
					</Link>
					<Link style={{ textDecoration: 'none' }}>
						<Typography color='textPrimary' style={{ fontWeight: 'bold' }}>
							<i className='uil uil-qrcode-scan' /> Générer une attestation
						</Typography>
					</Link>
				</Breadcrumbs>
				<Typography variant='h6' component='h1'>
					<i className='uil uil-qrcode-scan' /> Générateur d'attestation de déplacement provisoire
				</Typography>
				<Typography color='textSecondary'>
					En application de l’article 3 du décret du 23 mars 2020 prescrivant les mesures générales
					nécessaires pour faire face à l’épidémie de Covid19 dans le cadre de l’état d’urgence sanitaire.
					(Générateur créer avant le gouvernement français le 04/05/2020)
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 15 }} />
				<Box style={{ marginTop: 15 }}>
					<Box>
						<Box display='flex' alignItems='center'>
							<TextField
								label='Nom'
								placeholder='Delarue'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Nom}
								onChange={handleChange('Nom')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<TextField
								label='Prenom'
								placeholder='Ludovic'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Prenom}
								onChange={handleChange('Prenom')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
						</Box>
						<Box display='flex' alignItems='center'>
							<TextField
								label='Date de naissance'
								placeholder='10/11/1990'
								helperText={'Veuillez renseigner une date valide : dd/MM/yyyy'}
								variant='outlined'
								fullWidth
								type='date'
								InputLabelProps={{
									shrink: true
								}}
								onInput={onlyNumbers}
								value={values.Naissance}
								onChange={handleChange('Naissance')}
								style={{ marginTop: 25, marginRight: 15 }}
							/>
							<TextField
								label='Ville de naissance'
								placeholder='Paris 11e'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Ville_naissance}
								onChange={handleChange('Ville_naissance')}
							/>
						</Box>
						<Box display='flex' alignItems='center'>
							<TextField
								label='Adresse'
								variant='outlined'
								helperText={'12 rue des fleures 75001 Paris'}
								fullWidth
								type='text'
								value={values.Adresse}
								onChange={handleChange('Adresse')}
								style={{ marginTop: 25, marginRight: 15 }}
							/>
							<TextField
								label='Date de sortie'
								variant='outlined'
								helperText={'Veuillez renseigner une date valide : dd/MM/yyyy'}
								fullWidth
								type='date'
								InputLabelProps={{
									shrink: true
								}}
								value={values.Sortie}
								onChange={handleChange('Sortie')}
								style={{ marginTop: 25 }}
							/>
						</Box>
						<Box display='flex' alignItems='center'>
							<TextField
								label='Heure de sortie'
								variant='outlined'
								fullWidth
								placeholder={moment().format('LT')}
								helperText={'Veuillez renseigner une heure valide : hh:mm'}
								type='time'
								value={values.SortieHeure}
								onChange={handleChange('SortieHeure')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<FormControl fullWidth variant='outlined' style={{ marginTop: 10 }}>
								<InputLabel htmlFor='select'>Motifs</InputLabel>
								<Select
									native
									fullWidth
									value={values.Motifs}
									onChange={handleChange('Motifs')}
									label='Motifs'
								>
									<option aria-label='None' value='' />
									<option value='travail'>
										Déplacements entre le domicile et le lieu d’exercice de l’activité
										professionnelle.
									</option>
									<option value='courses'>
										Déplacements pour effectuer des achats de fournitures nécessaires à lactivité
										professionnelle et des achats de première nécessité.
									</option>
									<option value='sante'>
										Consultations et soins ne pouvant être assurés à distance et ne pouvant être
										différés.
									</option>
									<option value='famille'>
										Déplacements pour motif familial impérieux, pour l’assistance aux personnes
										vulnérables ou la garde d’enfants.
									</option>
									<option value='sport'>
										Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon
										maximal d'un kilomètre autour du domicile.
									</option>
									<option value='judiciaire'>Convocation judiciaire ou administrative.</option>
									<option value='missions'>
										Participation à des missions d’intérêt général sur demande de l’autorité
										administrative.
									</option>
								</Select>
								<FormHelperText>Veuillez sélectionner un modif de sortie</FormHelperText>
							</FormControl>
						</Box>
					</Box>

					<Button
						style={{
							backgroundColor: 'rgb(70, 176, 74)',
							color: 'white',
							fontWeight: 'bold',
							marginTop: 15,
							padding: 15,
							borderRadius: 4,
							boxShadow: 'rgba(24, 176, 116, 0.15) 0px 9px 18px 3px'
						}}
						onClick={handleClickOpen}
					>
						Voir votre attestation <i className='uil uil-arrow-up-right' />
					</Button>
					<Dialog open={open} onClose={handleClose}>
						<DialogTitle>Êtes-vous sûr de bien vouloir continuer ?</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Avant de télécharger l'attestation veuillez à bien vérifier les informations que vous
								avez renseigné.
							</DialogContentText>
							<DialogContentText>
								Si vous avez un doute sur la véracité de ce générateur d'attestation de déplacement
								provisoire vous pouvez vous rendre sur{' '}
								<a
									href='https://media.interieur.gouv.fr/deplacement-covid-19/'
									target='_blank'
									without
									rel='noopener noreferrer'
								>
									ce lien
								</a>{' '}
								et accéder au générateur du gouvernement.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<QRCode id='QRCODE' style={{ display: 'none' }} value={qrcodevalue} renderAs={'canvas'} />
							<Button
								onClick={handleClose}
								style={{
									marginTop: 15,
									color: 'gray'
								}}
								autoFocus
							>
								Annuler
							</Button>
							<Button
								onClick={downloadQR}
								endIcon={
									<i
										className='uil uil-download-alt'
										style={{ fontSize: 15, fontWeight: 'bold', color: '#46B04A' }}
									/>
								}
								style={{
									marginTop: 15,
									color: '#46B04A',
									fontWeight: 'bold',
									textTransform: 'none'
								}}
								autoFocus
							>
								Télécharger
							</Button>
						</DialogActions>
					</Dialog>
				</Box>
			</main>
		</div>
	);
};
