import React from 'react';
import { Grid, Typography, Box, Divider } from '@material-ui/core';
import ClientStep from '../../components/ClientStep';
import MapDev from '../../components/MapDev';
import Navbar from '../../components/Navbar';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = 'HomeDelivery - Livraison en cours..';

export default (props) => {
	const items = [
		{
			title: 'Jean célestin a accepter votre commande',
			time: 'Le 12 Mars 2020 à 19h30',
			icon: 'uil uil-check-circle',
			check: 'uil uil-check',
			class: 'successCard'
		},
		{
			title: 'Jean célestin est dans le magasin',
			time: 'Le 12 Mars 2020 à 19h38',
			icon: 'uil uil-shop',
			check: 'uil uil-check',
			class: 'successCard'
		},

		{
			title: 'Jean célestin vous as envoyé le ticket de caisse',
			time: 'Le 12 Mars 2020 à 19h44',
			icon: 'uil uil-qrcode-scan',
			check: 'uil uil-times',
			class: 'dangerCard'
		},
		{
			title: 'Jean célestin est en chemin vers votre domicile',
			time: 'Le 12 Mars 2020 à 19h45',
			icon: 'uil uil-car',
			check: 'uil uil-times',
			class: 'dangerCard'
		}
	];
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={8} md={8} sm={12}>
					<Navbar />
					<Box style={{ padding: 35 }}>
						<ClientStep />
						<Divider />
						<Box style={{ marginTop: 5, padding: 25 }}>
							{items.map((i, k) => {
								return (
									<Box
										display='flex'
										alignItems='center'
										className={i.class}
										key={k}
										style={{ width: '85%' }}
									>
										<Box>
											<i className={i.icon} style={{ fontSize: 50 }} />
										</Box>
										<Box style={{ marginLeft: 10 }} flexGrow={1}>
											<Typography>{i.title}</Typography>
											<Typography color='textSecondary'>{i.time}</Typography>
										</Box>
										<Box>
											<i class={i.check} style={{ fontSize: 25 }} />
										</Box>
									</Box>
								);
							})}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} xl={4} md={4} sm={12}>
					<Box
						style={{
							position: '-webkit-sticky',
							position: 'sticky',
							top: 0,
							height: '100vh',
							backgroundColor: '#F3F7F3'
						}}
					>
						<MapDev />
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
