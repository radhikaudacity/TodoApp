import React from 'react';
import TodoManager from '../services/TodoManager';

const ClearCompletedButton = (context) => {
	const { state, setState } = context;
	const todos = TodoManager.clearTodos(context);

	return TodoManager.isAnySelected(context)
		&& <div>
			<button
				onClick={ () => setState({
					...state,
					todos,
				}) }
			>Clear Completed Todos</button>
		</div>;
};

export default ClearCompletedButton;
