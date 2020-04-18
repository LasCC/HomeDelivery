import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ROUTE from '../Routes';

export default (props) => {
	return (
		<div>
			<Box display='flex' alignItems='center'>
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
					<a href='#LeSaviezVous' style={{ textDecoration: 'none', color: 'black' }}>
						<Typography
							style={{
								padding: 13,
								marginRight: 15
							}}
						>
							C'est quoi HomeDelivery ?
						</Typography>
					</a>
					<a href='#CommentCaMarche' style={{ textDecoration: 'none', color: 'black' }}>
						<Typography
							style={{
								padding: 13,
								marginRight: 15
							}}
						>
							Comment ça marche ?
						</Typography>
					</a>
					<Divider
						orientation='vertical'
						flexItem
						style={{ marginRight: 15, backgroundColor: 'lightgray' }}
					/>
					<Link to={ROUTE.REGISTER} style={{ textDecoration: 'none' }}>
						<Typography
							className='HoverText'
							style={{
								color: '#18B074'
							}}
						>
							Inscription gratuite
						</Typography>
					</Link>
				</Box>
			</Box>
		</div>
	);
};
