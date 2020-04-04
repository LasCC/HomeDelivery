import React, { useState } from 'react';
import { Grid, Box, TextField } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import MapDev from '../../components/MapDev';
import QRCode from 'qrcode.react';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = 'HomeDelivery - dev';

export default (props) => {
	const onlyNumbers = (e) => {
		e.target.value = e.target.value.replace(/^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g, '');
	};
	const [ values, setValues ] = useState({
		Nom: '',
		Prenom: '',
		Naissance: '10/11/1990',
		Ville: '',
		Adresse: '',
		Sortie: '',
		SortieHeure: '',
		Motifs: ''
	});
	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};

	const qrcodevalue = `Creer le ${moment().format('DD/MM/YYYY')} a ${moment().format(
		'LT'
	)}; Nom: ${values.Nom}; Prenom: ${values.Prenom}; Naissance: ${values.Naissance} a ${values.Ville}; Adresse: ${values.Adresse}; Sortie: ${values.Sortie} a ${values.SortieHeure}; Motifs: ${values.Motifs}`;
	console.log(values);
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={6} md={6} sm={12}>
					<Navbar />
					<Box style={{ padding: 15 }}>
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
								label='Naissance'
								type='number'
								placeholder='10/11/1990'
								variant='outlined'
								fullWidth
								type='text'
								onInput={onlyNumbers}
								value={values.Naissance}
								onChange={handleChange('Naissance')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<TextField
								label='Ville'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Ville}
								onChange={handleChange('Ville')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
						</Box>
						<Box display='flex' alignItems='center'>
							<TextField
								label='Adresse'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Adresse}
								onChange={handleChange('Adresse')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<TextField
								label='Sortie'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Sortie}
								onChange={handleChange('Sortie')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
						</Box>
						<Box display='flex' alignItems='center'>
							<TextField
								label='SortieHeure'
								variant='outlined'
								fullWidth
								type='text'
								value={values.SortieHeure}
								onChange={handleChange('SortieHeure')}
								style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
							/>
							<TextField
								label='Motifs'
								variant='outlined'
								fullWidth
								type='text'
								value={values.Motifs}
								onChange={handleChange('Motifs')}
								style={{ marginTop: 25, marginBottom: 15 }}
							/>
						</Box>
					</Box>
					<QRCode
						value={qrcodevalue}
						size={128}
						bgColor={'#ffffff'}
						fgColor={'#000000'}
						level={'L'}
						mountNode
						includeMargin={true}
						renderAs={'svg'}
					/>
				</Grid>
				<Grid item xs={12} xl={6} md={6} sm={12}>
					<Box
						style={{
							position: '-webkit-sticky',
							position: 'sticky',
							top: 0,
							height: '100vh',
							backgroundColor: '3D9EFE7'
						}}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<MapDev />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
