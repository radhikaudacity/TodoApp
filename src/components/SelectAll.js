import React from 'react';

const SelectAll = (context) => {
	const { state, setState } = context;

	return (
		(state.todos.length > 0) && <div>
			<input
				type="checkbox"
				onChange={ (event) => setState({
					...state, todos: state.todos.map((todo) =>
						({ ...todo, checked: event.target.checked })),
				}) }
			/>Select All Todos
		</div>

	);
};

export default SelectAll;
