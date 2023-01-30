import React from 'react';
import TodoManager from '../services/TodoManager';

const DeleteButton = (context) => {
	const { state, setState, data: { todo, index }} = context;

	return (
		<button
			id={ index }
			onClick={ () => setState({
				...state,
				todos: TodoManager.deleteTodo(context, todo.id),
			}) }
		>Delete
		</button>);
};

export default DeleteButton;
