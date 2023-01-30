import React from 'react';
import TodoManager from '../services/TodoManager';

const ClearCompletedButton = (context) => {
	const { state, setState } = context;
	const todos = TodoManager.clearTodos(context);

	return state.todos.some((todo) => todo.checked)
		? <div>
			<button
				onClick={ () => setState({
					...state,
					todos,
				}) }
			>Clear Completed Todos</button>
		</div>
		: <div/>;
};

export default ClearCompletedButton;
