import React from 'react';
import TodoManager from '../services/TodoManager';

const UpdateTodoButton = (context) => {
	const { state, setState } = context;
	const updatedTodos = TodoManager.updateTodo(context);

	return (
		<button
			onClick={ () => setState({
				...state,
				todos: updatedTodos,
				input: '',
				updatedTodo: null,
			}) }
		>	Update Todo Item
		</button>);
};

export default UpdateTodoButton;
