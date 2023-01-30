import React from 'react';
import TodoManager from '../services/TodoManager';

const ClearCompletedButton = (context) => {
	const { state, setState } = context;
	const clearTodos = TodoManager.clearTodos(context);

	return state.todos.find((todo) => todo.checked)
		? <div>
			<button
				onClick={ () => setState({
					...state,
					todos: clearTodos,
				}) }
			>Clear Completed Todos</button>
		</div>
		: <div/>;
};

export default ClearCompletedButton;
