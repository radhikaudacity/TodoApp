import { rndString } from '@laufire/utils/random';
import React from 'react';
import TodoManger from '../services/TodoManger';

const AddTodoButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				todos: [...state.todos,
					{
						text: state.input,
						checked: false,
						id: rndString(),

					}],
				input: '',

			}) }
			disabled={ TodoManger.isInputEmpty(context) }
		>Add Todo Item
		</button>);
};

export default AddTodoButton;
