import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography, Box } from '@material-ui/core';

const items = [
	{
		title: 'Lear Music Reader',
		description: 'A PDF Reader specially designed for musicians.',
		img: 'https://source.unsplash.com/random/800x600'
	},
	{
		title: 'Hash Code 2019',
		description: 'My Solution on the 2019 Hash Code by Google Slideshow problem.',
		img: 'https://source.unsplash.com/random/800x600'
	},
	{
		title: 'Terrio',
		description: 'A exciting mobile game game made in the Unity Engine.',
		img: 'https://source.unsplash.com/random/800x600'
	},
	{
		title: 'React Carousel',
		description: 'A Generic carousel UI component for React using material ui.',
		img: 'https://source.unsplash.com/random/800x600'
	}
];

const Cards = (props) => {
	return (
		<Box display='flex' alignItems='center' style={{ backgroundColor: 'white' }}>
			<Box flexGrow={1} style={{ height: 150 }}>
				<img src={props.item.img} alt='images_carousel' style={{ height: '100%', margin: 0 }} />
			</Box>
			<Box style={{ padding: 15 }}>
				<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>
					{props.item.title}
				</Typography>
				<Typography color='textSecondary'>{props.item.description}</Typography>
			</Box>
		</Box>
	);
};

export default (props) => {
	return (
		<Carousel className='SecondExample' autoPlay={true} timer={60000} animation='fade' indicators={true}>
			{items.map((item, index) => {
				return <Cards item={item} key={index} />;
			})}
		</Carousel>
	);
};
