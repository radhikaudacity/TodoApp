import { rndString } from '@laufire/utils/random';
import React from 'react';
import TodoManager from '../services/TodoManager';

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
			disabled={ TodoManager.isInputEmpty(context) }
		>Add Todo Item
		</button>);
};

export default AddTodoButton;
