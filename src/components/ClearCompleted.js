import React from 'react';

const ClearCompleted = (context) => {
	const { state, setState } = context;

	const handleClick = () => {
		setState({
			...state,
			todos: [...state.todos.filter((todo) => !todo.checked)],
		});
	};

	return <div>
		<button
			onClick={ () => handleClick() }
		>Clear Completed Todos</button>
	</div>;
};

export default ClearCompleted;
