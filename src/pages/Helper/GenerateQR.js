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
	DialogActions
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerDashboardHelper from '../../components/DrawerDashboardHelper';
import QRCode from 'qrcode.react';
import moment from 'moment';
import 'moment/locale/fr';
import ROUTE from '../../Routes';
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
		e.target.value = e.target.value.replace(/^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g, '');
	};
	const [ values, setValues ] = useState({
		search: '',
		Nom: '',
		Prenom: '',
		Naissance: '10/11/1990',
		Ville_naissance: '',
		Adresse: '',
		Sortie: moment().format('DD/MM/YY'),
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
				<Typography variant='h6' component='h1'>
					Générateur d'attestation de déplacement provisoire
				</Typography>
				<Typography color='textSecondary' variant='paragraph'>
					En application de l’article 3 du décret du 23 mars 2020 prescrivant les mesures générales
					nécessaires pour faire face à l’épidémie de Covid19 dans le cadre de l’état d’urgence sanitaire.
				</Typography>
				<Divider style={{ marginTop: 15, marginBottom: 15 }} />
				<Box style={{ marginTop: 15, padding: 35 }}>
					<Box style={{ marginTop: 15, marginBottom: 15 }}>
						<Typography variant='h6' component='h1'>
							Veuillez remplir le formulaire pour pouvoir génerer votre QRCode
							<i className='uil uil-qrcode-scan' />
						</Typography>
						<Divider style={{ marginTop: 15, marginBottom: 15 }} />
						<Typography color='textSecondary' variant='paragraph'>
							Les personnes souhaitant bénéficier de l'une de ces exceptions doivent se munir s'il y a
							lieu, lors de leurs déplacements hors de leur domicile, d'un document leur permettant de
							justifier que le déplacement considéré entre dans le champ de l'une de ces exceptions. A
							utiliser par les travailleurs non-salariés, lorsqu’ils ne peuvent disposer d’un justificatif
							de déplacement établi par leur employeur. Y compris les acquisitions à titre gratuit
							(distribution de denrées alimentaires…) et les déplacements liés à la perception de
							prestations sociales et au retrait d’espèces.
						</Typography>
					</Box>
					<Box style={{}}>
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
								type='number'
								placeholder='10/11/1990'
								helperText={'Veuillez renseigner une date valide : dd/MM/yyyy'}
								variant='outlined'
								fullWidth
								type='text'
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
								placeholder={moment().format('DD/MM/YY')}
								helperText={'Veuillez renseigner une date valide : dd/MM/yyyy'}
								fullWidth
								type='text'
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
								type='text'
								value={values.SortieHeure}
								onChange={handleChange('SortieHeure')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<TextField
								label='Motifs'
								variant='outlined'
								helperText={'Veuillez sélectionner un modif de sortie'}
								fullWidth
								type='text'
								value={values.Motifs}
								onChange={handleChange('Motifs')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
						</Box>
					</Box>

					<Button
						style={{
							backgroundColor: 'rgb(70, 176, 74)',
							color: 'white',
							fontWeight: 'bold',
							marginTop: 15,
							padding: 15,
							borderRadius: 0
						}}
						onClick={handleClickOpen}
					>
						Voir votre attestation <i className='uil uil-arrow-up-right' />
					</Button>
					<Dialog open={open} onClose={handleClose}>
						<Box style={{}}>
							<DialogTitle>Êtes-vous sûr de bien vouloir continuer ?</DialogTitle>
							<DialogContent>
								<DialogContentText>
									Avant de télécharger l'attestation veuillez à bien vérifier les informations que
									vous avez renseigné.
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<QRCode
									id='QRCODE'
									style={{ display: 'none' }}
									value={qrcodevalue}
									renderAs={'canvas'}
								/>
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
						</Box>
					</Dialog>
				</Box>
			</main>
		</div>
	);
};
