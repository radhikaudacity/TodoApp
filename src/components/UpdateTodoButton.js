import React from 'react';
import TodoManger from '../services/TodoManger';

const UpdateTodoButton = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => TodoManger.updateTodo(context) }
		>Update Todo Item
		</button>);
};

export default UpdateTodoButton;
