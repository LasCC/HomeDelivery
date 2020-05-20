import React, { useState } from 'react';
import {
	Grid,
	TextField,
	Typography,
	Box,
	Button,
	Divider,
	InputLabel,
	InputAdornment,
	FormControl,
	Select,
	FormHelperText
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import ClientStep from '../../components/ClientStep';
import ROUTE from '../../Routes';
import Navbar from '../../components/Navbar';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
window.document.title = 'HomeDelivery - Service de livraison';

export default (props) => {
	const inputLabel = React.useRef(null);
	const [ labelWidth, setLabelWidth ] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);
	const [ todos, setTodos ] = useState([]);
	const onlyNumbers = (e) => {
		e.target.value = e.target.value.replace(/[^0-9]/g, '');
		console.log(e.target.value);
		if (e.target.value > 50) {
			e.target.value = '50';
		}
	};
	const Todo = ({ todo, index, removeTodo }) => {
		return (
			<Box display='flex' alignItems='center' style={{ marginTop: 15 }}>
				<Typography color='textSecondary'>{todo.article}</Typography>
				<i className='uil uil-times' onClick={() => removeTodo(index)} style={{ cursor: 'pointer' }} />
			</Box>
		);
	};
	const addTodo = (article) => {
		const newTodos = [ ...todos, { article } ];
		console.log(todos);
		if (todos.length < 10) {
			setTodos(newTodos);
		} else {
			const FormHelperTextTodo = document.querySelector('#FormHelperTextTodo');
			FormHelperTextTodo.innerHTML = 'Vous avez atteint la limite de 10 articles';
			FormHelperTextTodo.classList.add('Mui-error');
			return;
		}
	};
	const removeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const [ values, setValues ] = useState({
		list: '',
		annexe: '',
		price_max: '',
		payment: ''
	});

	const handleChange = (name) => (event) => {
		setValues({ ...values, [name]: event.target.value });
	};
	const handleSubmit = () => {
		console.log('====== LIST COURSES ======');
		console.log(values);
	};
	console.log(values);
	const TodoForm = ({ addTodo }) => {
		const [ value, setValue ] = useState('');

		const handleTodo = (e) => {
			e.preventDefault();
			if (!value) return;
			addTodo(value);
			setValue('');
		};
		return (
			<form onSubmit={handleTodo}>
				<Box display='flex' alignItems='center'>
					<TextField
						id='todoTextField'
						style={{ marginTop: 15 }}
						label='Articles'
						fullWidth
						type='text'
						variant='outlined'
						placeholder='Riz, carottes, pommes vertes'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<Button
						onClick={handleTodo}
						style={{
							marginTop: 15,
							height: '100%',
							backgroundColor: 'rgb(70, 176, 74)',
							color: 'white',
							marginLeft: 3,
							padding: 11
						}}
					>
						<i className='uil uil-plus' style={{ fontSize: 20 }} />
					</Button>
				</Box>
			</form>
		);
	};
	return (
		<div>
			<Grid container>
				<Grid item xs={12} xl={8} md={8} sm={12}>
					<Navbar />
					<Box style={{ padding: 35 }}>
						<Divider />
						<Box style={{ marginTop: 15, padding: 25 }}>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25 }}>
								Liste de course :{' '}
							</Typography>
							<TodoForm addTodo={addTodo} onChange={handleChange('list')} />
							<FormHelperText id='FormHelperTextTodo'>
								La liste des courses est limitée à 10 articles maximum
							</FormHelperText>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 25, marginTop: 15 }}>
								Demandes annexes :{' '}
							</Typography>
							<TextField
								style={{ marginTop: 15 }}
								label='Demande'
								multiline
								fullWidth
								rows='4'
								variant='outlined'
								placeholder='Dans le lidl près de chez moi..'
								value={values.annexe}
								onChange={handleChange('annexe')}
							/>
							<FormHelperText>Mettre texte ici pour expliquer les demandes annexes</FormHelperText>
							<Typography variant='h1' style={{ fontWeight: 'bold', fontSize: 20, marginTop: 25 }}>
								Mode de paiement :
							</Typography>
							<FormControl fullWidth variant='outlined' style={{ marginTop: 15 }}>
								<InputLabel ref={inputLabel} htmlFor='select'>
									Mode de paiement
								</InputLabel>
								<Select
									native
									labelWidth={labelWidth}
									value={values.payment}
									onChange={handleChange('payment')}
									label='Carte de crédit'
								>
									<option aria-label='None' value='' />
									<option value='Carte de crédit'>Carte de crédit</option>
									<option value='Espèce'>Espèce</option>
								</Select>
							</FormControl>
							<Box style={{ marginBottom: 25, marginTop: 25 }}>
								<Box>
									<Typography
										variant='h1'
										style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 15 }}
									>
										Prix maximum à ne pas dépasser :
									</Typography>
									<TextField
										variant='outlined'
										label='Prix'
										fullWidth
										onInput={(e) => onlyNumbers(e)}
										inputProps={{
											maxLength: 2
										}}
										InputProps={{
											endAdornment: <InputAdornment position='end'>€</InputAdornment>
										}}
										value={values.price_max}
										onChange={handleChange('price_max')}
									/>
									<FormHelperText>Le prix maximum fixé est de 50€</FormHelperText>
								</Box>
							</Box>

							<Box display='flex' flexDirection='row-reverse'>
								<Link to={ROUTE.CONFIRM_ANNONCE} style={{ textDecoration: 'none' }}>
									<Button
										onClick={handleSubmit}
										style={{
											backgroundColor: 'rgb(70, 176, 74)',
											color: 'white',
											fontWeight: 'bold',
											marginTop: 20,
											padding: 15,
											borderRadius: 4
										}}
									>
										Continuer <i className='uil uil-arrow-right' />
									</Button>
								</Link>
								<Button
									style={{
										color: 'gray',
										fontWeight: 'bold',
										marginTop: 20,
										padding: 15,
										borderRadius: 0
									}}
								>
									Annuler
								</Button>
							</Box>
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
						<iframe
							frameborder='0'
							style={{ width: '100%', border: 0 }}
							src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyDlnNDehOkiTJdbnFJ8I9LenovU6OON_3A&origin=Paris+France&destination=Rambouillet+78120&avoid=tolls|highways'
						/>
						<Box style={{ padding: 35 }}>
							<article className='ticket'>
								<Box className='ticket__wrapper'>
									<Box className='ticket__header'>
										<Typography>Numéro de l'annonce 1564564</Typography>
									</Box>
								</Box>
								<div className='ticket__divider' />
								<Box className='ticket__body'>
									<Box className='ticket__section'>
										<Typography>Liste des courses ({todos.length} / 10) :</Typography>
										{todos.map((todo, index) => (
											<Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
										))}
									</Box>
									<Box className='ticket__section'>
										<Typography>Demandes annexes :</Typography>
										<Typography color='textSecondary'>{values.annexe}</Typography>
									</Box>

									<Box className='ticket__section'>
										<Typography>Mode de paiement :</Typography>
										<Typography color='textSecondary'>{values.payment}</Typography>
									</Box>
								</Box>
								<Box className='ticket__footer '>
									<Typography style={{ fontWeight: 'bold' }}>Prix maximum :</Typography>
									<Typography color='textSecondary'>{values.price_max} €</Typography>
								</Box>
							</article>
							<Link to={ROUTE.CONFIRM_ANNONCE} style={{ textDecoration: 'none' }}>
								<Button
									onClick={handleSubmit}
									fullWidth
									style={{
										backgroundColor: 'rgb(70, 176, 74)',
										color: 'white',
										fontWeight: 'bold',
										marginTop: 20,
										padding: 15,
										borderRadius: 4
									}}
								>
									Continuer <i className='uil uil-arrow-right' />
								</Button>
							</Link>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};
