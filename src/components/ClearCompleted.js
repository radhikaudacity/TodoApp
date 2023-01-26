import React from 'react';

const handleClick = ({ state, setState }) =>
	setState({
		...state,
		todos: state.todos.filter((todo) => !todo.checked),
	});

const ClearCompleted = (context) => <div>
	<button
		onClick={ () => handleClick(context) }
	>Clear Completed Todos</button>
</div>;

export default ClearCompleted;
