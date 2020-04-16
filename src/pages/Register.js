import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';
window.document.title = 'HomeDelivery - Choix création de compte';

export default (props) => {
	return (
		<div>
			<Grid container>
				<Grid
					item
					xs={12}
					xl={3}
					md={3}
					sm={12}
					style={{ boxShadow: '17px 0px 37px -20px rgba(0, 0, 0, 0.35)' }}
				>
					<Box
						style={{
							height: '100vh',
							zIndex: 2,
							backgroundColor: '#18B074'
						}}
						className='backgroundRegister'
					>
						<Box
							display='flex'
							alignItems='center'
							style={{
								padding: 25
							}}
						>
							<img src='http://svgur.com/i/Jqv.svg' alt='logoHomedeliveryBlanc' style={{ height: 40 }} />
							<Box>
								<Typography style={{ color: 'white', fontWeight: 'bold', marginLeft: 10 }}>
									HomeDelivery
								</Typography>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} xl={9} md={9} sm={12}>
					<Box
						style={{ height: '100vh', zIndex: 1 }}
						display='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Box style={{ width: '85%' }}>
							<Typography variant='h5' component='h1' style={{ fontWeight: 'bolder', marginBottom: 25 }}>
								Choisissez votre camp
							</Typography>
							<Typography color='textSecondary' mt={3}>
								Cette partie est déterminante pour la suite, en effet vous devez choisir en aider les
								autres ou être aider.
							</Typography>
							<Link to={ROUTE.REGISTER_CLIENT} style={{ textDecoration: 'none', color: 'black' }}>
								<Box display='flex' alignItems='center' className=' successCard'>
									<Box>
										<i className='uil uil-chat-bubble-user' style={{ fontSize: 50 }} />
									</Box>
									<Box style={{ marginLeft: 10 }} flexGrow={1}>
										<Typography>
											Compte <strong>"classique"</strong>
										</Typography>
										<Typography color='textSecondary'>
											Créer des annonces, être aidé par la communauté HomeDelivery
										</Typography>
									</Box>
									<Box>
										<i class='uil uil-arrow-right' style={{ fontSize: 25 }} />
									</Box>
								</Box>
							</Link>
							<Link to={ROUTE.REGISTER_HELPER} style={{ textDecoration: 'none', color: 'black' }}>
								<Box display='flex' alignItems='center' className=' successCard'>
									<Box>
										<i className='uil uil-users-alt' style={{ fontSize: 50 }} />
									</Box>
									<Box style={{ marginLeft: 10 }} flexGrow={1}>
										<Typography>
											Compte <strong>"bénévole"</strong>
										</Typography>
										<Typography color='textSecondary'>
											Aidez les personnes dans le besoin, rejoindre la communauté HomeDelivery
										</Typography>
									</Box>
									<Box>
										<i class='uil uil-arrow-right' style={{ fontSize: 25 }} />
									</Box>
								</Box>
							</Link>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
