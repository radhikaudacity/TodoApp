import React from 'react';

const handleClick = ({ state, setState }) =>
	setState({
		...state,
		todos: state.todos.filter((todo) => !todo.checked),
	});

const ClearCompleted = (context) => {
	const { state } = context;

	return state.todos.find((todo) => todo.checked)
		? <div>
			<button
				onClick={ () => handleClick(context) }
			>Clear Completed Todos</button>
		</div>
		: <div/>;
};

export default ClearCompleted;
