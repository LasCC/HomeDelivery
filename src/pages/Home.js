import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	Typography,
	Box,
	Button,
	Paper,
	IconButton,
	InputBase,
	Divider,
	Grid,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails
} from '@material-ui/core';
import Lottie from 'react-lottie';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../components/Footer';
import Map from '../components/Map';
window.document.title = 'HomeDelivery - Accueil';

const shampoo = require('../data/shampoo.json');
const handShake = require('../data/handShake.json');
const mask = require('../data/mask.json');
const soap = require('../data/soap.json');
const shampooOptions = {
	loop: true,
	autoplay: true,
	animationData: shampoo,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};
const handShakeOptions = {
	loop: true,
	autoplay: true,
	animationData: handShake,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};
const maskOptions = {
	loop: true,
	autoplay: true,
	animationData: mask,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};
const soapOptions = {
	loop: true,
	autoplay: true,
	animationData: soap,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 15,
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		boxShadow:
			'0 2px 2.3px rgba(0, 0, 0, 0.011),  0 3.4px 5.6px rgba(0, 0, 0, 0.016),  0 5.1px 10.7px rgba(0, 0, 0, 0.02),  0 8.5px 19.1px rgba(0, 0, 0, 0.024),  0 18.7px 35.4px rgba(0, 0, 0, 0.029),  0 100px 80px rgba(0, 0, 0, 0.04)'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		marginTop: 3
	},
	iconButton: {
		padding: 10
	},
	divider: {
		height: 28,
		margin: 4
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

	return (
		<div>
			<Navbar />
			<Grid container>
				<Grid item xs={12}>
					<Container maxWidth='lg'>
						<Box style={{ height: '100vh' }}>
							<Box
								style={{
									position: 'relative',
									top: '40%',
									left: '40%',
									transform: 'translate(-40%, -40%)'
								}}
							>
								<Box display='flex' alignItems='center' style={{ marginBottom: 10 }}>
									<img
										src='https://svgur.com/i/Jg4.svg'
										style={{ height: 65, marginRight: 15 }}
										alt='logo'
									/>
									<Typography
										variant='h1'
										style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}
									>
										HomeDelivery
									</Typography>
								</Box>
								<Typography variant='h1' style={{ fontSize: 30 }}>
									La plateforme qui met en relation<br />
									les personnes dans le besoin
								</Typography>
								<Typography
									variant='body2'
									color='textSecondary'
									style={{ marginTop: 15, fontSize: 20 }}
								>
									Nous mettons en relation des personnes prête à aider les<br />
									personnes dans le besoin en ses temps de guerre sanitaire.
								</Typography>
								<Paper component='form' className={classes.root} style={{ marginTop: 25 }}>
									<i className='uil uil-map-pin-alt' style={{ fontSize: 25 }} />
									<InputBase
										onChange={handleChange('search')}
										className={classes.input}
										placeholder='Rechercher un livreur près de chez vous'
										inputProps={{ 'aria-label': 'Rechercher un livreur près de chez vous' }}
									/>
									<IconButton type='submit' className={classes.iconButton} aria-label='search'>
										<i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
									</IconButton>
								</Paper>
								{values.search}
							</Box>
						</Box>
					</Container>
					<Grid item>
						<Box
							id='LeSaviezVous'
							style={{
								padding: '4em',
								marginTop: 15,
								marginBottom: 15,
								backgroundColor: '#D9EFE7'
							}}
						>
							<Container maxWidth='lg'>
								<Typography
									variant='h1'
									style={{ color: 'black', fontWeight: 'bold', fontSize: 45, marginBottom: 15 }}
								>
									Le saviez vous ?
								</Typography>
								<Typography>
									Nous sommes une plateforme d’entraide qui<br />
									cherche à mettre en relation des personnes<br />
									qui veulent aider leurs prochains pour des <br />
									tâches quotidiennes telle qu’aller chercher <br />
									du pain, faire des courses de première nécessité <br />
									tout cela dans le bénévolat et la bienveillance.
								</Typography>
							</Container>
						</Box>
					</Grid>
					{/* Images section */}
					<Grid item>
						<Box
							style={{
								padding: '2em',
								marginTop: 35
							}}
						>
							<Container maxWidth='lg'>
								<Typography
									variant='h1'
									style={{ color: 'black', fontWeight: 'bold', fontSize: 45, marginBottom: 15 }}
								>
									Respect des consignes sanitaires
								</Typography>
								<Typography color='textSecondary'>
									Nous mettons un poing d’honneur à bien respecter les règles sanitaires mise en
									oeuvre dans le cadre de l’épidémie sanitaire CoViD-19.
								</Typography>
								<Box display='flex' alignItems='center' style={{ marginTop: 80 }}>
									<Box style={{ marginRight: 25 }}>
										<Lottie options={handShakeOptions} height={150} width={150} />
									</Box>
									<Box flexGrow={1}>
										<Typography>
											Pas de contacte à plus de 1m de distance<br /> entre le bénévole est le
											client, il déposera <br />la commande sur le palier de votre
											apparement/maison.
										</Typography>
									</Box>
								</Box>
								<Divider style={{ marginTop: 35, marginBottom: 35 }} />
								<Box display='flex' alignItems='center' style={{ marginTop: 50 }}>
									<Box
										flexGrow={1}
										display='flex'
										justifyContent='flex-end'
										style={{ marginRight: 25 }}
									>
										<Typography>
											Les bénévoles doivent absolument porter un masque de protection<br />
											pour éviter le plus possible le risque de propagation du virus.
										</Typography>
									</Box>
									<Box>
										<Lottie options={maskOptions} height={150} width={150} />
									</Box>
								</Box>
								<Divider style={{ marginTop: 35, marginBottom: 35 }} />
								<Box display='flex' alignItems='center' style={{ marginTop: 50 }}>
									<Box style={{ marginRight: 25 }}>
										<Lottie options={soapOptions} height={150} width={150} />
									</Box>
									<Box flexGrow={1}>
										<Typography>
											Les bénévoles doivent absolument porter un masque de protection <br />
											pour éviter le plus possible le risque de propagation du virus.
										</Typography>
									</Box>
								</Box>
								<Divider style={{ marginTop: 35, marginBottom: 35 }} />
								<Box display='flex' alignItems='center' style={{ marginTop: 50 }}>
									<Box
										flexGrow={1}
										display='flex'
										justifyContent='flex-end'
										style={{ marginRight: 25 }}
									>
										<Typography>
											Désinfection systématique entre à la moindre interaction physique<br />
											avec un objet/personne (je sais pas ici non plus)
										</Typography>
									</Box>
									<Box>
										<Lottie options={shampooOptions} height={150} width={150} />
									</Box>
								</Box>
								<Divider style={{ marginTop: 35, marginBottom: 35 }} />
							</Container>
						</Box>
					</Grid>
					<Box style={{ marginTop: 15 }}>
						<Container maxWidth='lg'>
							<Typography
								variant='h1'
								style={{ color: 'black', fontWeight: 'bold', fontSize: 45, marginBottom: 15 }}
							>
								L’activité de nos membres
							</Typography>
							<Typography>
								Vous voulez rejoindre notre communauté d’entraide ?<br /> N’hésitez plus rejoignez
								<b> HomeDelivery</b>, aucun frais <br />
								ne va vous être demandé.
							</Typography>
							<Button
								style={{
									backgroundColor: '#18B074',
									padding: 13,
									borderRadius: 8,
									marginTop: 15,
									boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.22)'
								}}
							>
								<Typography
									style={{
										fontWeight: 'bold',
										color: 'white',
										textTransform: 'capitalize'
									}}
								>
									Inscription gratuite
								</Typography>
							</Button>
						</Container>
					</Box>
					<Box style={{ height: '70vh', backgroundColor: '#18B074', marginTop: 50 }}>
						<Map />
					</Box>
					<Box style={{ marginTop: 80, height: '70vh' }}>
						<Container maxWidth='lg'>
							<Typography
								variant='h1'
								style={{
									color: 'black',
									fontWeight: 'bold',
									fontSize: 35,
									marginBottom: 35,
									textAlign: 'center'
								}}
							>
								Questions récurrentes
							</Typography>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography className={classes.heading}>Expansion Panel 1</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>Expansion Panel 2</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>Expansion Panel 2</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>Expansion Panel 2</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<ExpansionPanel>
								<ExpansionPanelSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography className={classes.heading}>Expansion Panel 2</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
										lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</Container>
					</Box>
					<Box style={{ backgroundColor: '#D9EFE7' }}>
						<Footer />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
