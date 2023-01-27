import React from 'react';
import TodoManager from '../services/TodoManager';

const UpdateTodoButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				todos: TodoManager.updateTodo(context),
				input: '',
				displayAdd: true,
			}) }
		>	Update Todo Item
		</button>);
};

export default UpdateTodoButton;
