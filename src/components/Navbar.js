import React from 'react';
import { Box, Typography, Button, Dialog, DialogContent, Divider, IconButton } from '@material-ui/core';
import Drawer from './Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import ROUTE from '../Routes';

export default (props) => {
	const [ open, setOpen ] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Box display='flex' alignItems='center'>
				<Drawer />
				<Box p={2} flexGrow={1} display='flex' alignItems='center' style={{ marginLeft: 10 }}>
					<img src='https://svgur.com/i/Jg4.svg' style={{ height: 35, marginRight: 15 }} alt='logo' />
					<Link to={ROUTE.HOME} style={{ textDecoration: 'none', color: 'black' }}>
						<Typography variant='h1' noWrap style={{ color: 'black', fontWeight: 'bold', fontSize: 23 }}>
							HomeDelivery
						</Typography>
					</Link>
				</Box>
				<Box
					display={{
						xs: 'none',
						md: 'block',
						lg: 'block',
						xl: 'block',
						sm: 'none'
					}}
					p={2}
					style={{ marginRight: 10, display: 'flex' }}
					alignItems='center'
				>
					<Link to={ROUTE.LOGIN} style={{ textDecoration: 'none', color: '#18B074' }}>
						<Typography
							style={{
								padding: 13,
								marginRight: 15,
								color: '#18B074',
								fontWeight: 'bold',
								textTransform: 'capitalize'
							}}
						>
							Connexion
						</Typography>
					</Link>
					<Button
						onClick={handleClickOpen}
						style={{
							backgroundColor: '#18B074',
							padding: 13,
							borderRadius: 8,
							boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.15)'
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
				</Box>
				<Dialog
					open={open}
					maxWidth='md'
					onClose={handleClose}
					aria-labelledby='dialog-inscription'
					aria-describedby='inscriptiondialog'
				>
					<DialogContent>
						<Box display='flex' flexDirection='row-reverse'>
							<IconButton aria-label='delete' onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</Box>
						<Box display='flex' alignItems='center' style={{}}>
							<Box
								style={{
									padding: 25,
									marginBottom: 25,
									marginTop: 25
								}}
								alignItems='center'
							>
								<Typography align='center' style={{ fontWeight: 'bold', fontSize: 30 }} variant='h1'>
									J'ai besoin d'aide
								</Typography>
								<Typography
									color='textSecondary'
									style={{ marginTop: 15, marginBottom: 15, fontSize: 15 }}
								>
									Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi
									ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet
									nibh viverra malesuada.
								</Typography>
								<Link to={ROUTE.REGISTER} style={{ textDecoration: 'none', color: 'white' }}>
									<Button
										fullWidth
										style={{
											backgroundColor: '#18B074',
											padding: 13,
											borderRadius: 8,
											boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.15)',
											color: 'white',
											fontWeight: 'bold',
											marginTop: 15
										}}
									>
										Inscription
									</Button>
								</Link>
							</Box>
							<Divider orientation='vertical' flexItem style={{ marginBottom: 15 }} />
							<Box
								style={{
									padding: 25,
									marginBottom: 25,
									marginTop: 15
								}}
							>
								<Typography align='center' style={{ fontWeight: 'bold', fontSize: 30 }} variant='h1'>
									J'ai veux aider
								</Typography>
								<Typography
									color='textSecondary'
									style={{ marginTop: 15, marginBottom: 25, fontSize: 15 }}
								>
									Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.
									Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis
									eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
									vulputate vel, nisl.
								</Typography>
								<Link to={ROUTE.REGISTER_HELPER} style={{ textDecoration: 'none', color: 'white' }}>
									<Button
										fullWidth
										style={{
											backgroundColor: '#18B074',
											padding: 13,
											borderRadius: 8,
											boxShadow: '0px 9px 18px 3px rgba(24,176,116,0.15)',
											color: 'white',
											fontWeight: 'bold',
											marginTop: 15
										}}
									>
										Inscription
									</Button>
								</Link>
							</Box>
						</Box>
					</DialogContent>
				</Dialog>
			</Box>
		</div>
	);
};
