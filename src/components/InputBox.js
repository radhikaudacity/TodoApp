import { rndString } from '@laufire/utils/random';
import React from 'react';

const handleAddClick = (event, { state, setState }) =>
	setState({
		...state,
		todos: [...state.todos,
			{
				text: state.input,
				checked: false, id: rndString(),

			}],
		input: '',
	});
const handleChange = (event, { state, setState }) =>
	setState({ ...state, input: event.target.value });

const InputBox = (context) => {
	const { state, setState } = context;

	return (
		<div>
			<input
				value={ state.input }
				onChange={ (event) => handleChange(event, context) }
			/>
			<button
				onClick={ (event) => handleAddClick(event, context) }
				disabled={ state.input === '' }
			>Add item</button>
			<div/>
		</div>
	);
};

export default InputBox;
