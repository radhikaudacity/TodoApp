import React from 'react';
import TodoManager from '../services/TodoManager';

const AddTodoButton = (context) => {
	const { state, setState } = context;
	const isInputEmpty = TodoManager.isInputEmpty(context);
	const todos = TodoManager.addTodo(context);

	return (
		<button
			onClick={ () => setState({
				...state,
				todos: todos,
				input: '',
			}) }
			disabled={ isInputEmpty }
		>Add Todo Item
		</button>);
};

export default AddTodoButton;
