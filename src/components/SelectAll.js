import React from 'react';

const handleChange = (event, { state, setState }) =>
	setState({
		...state, todos: state.todos.map((todo) =>
			({ ...todo, checked: event.target.checked })),
	});

const SelectAll = (context) => {
	const { state: { todos }} = context;

	return (
		todos.length > 0
			&& <div>
				<input
					type="checkbox"
					onChange={ (event) => handleChange(event, context) }
				/>Select All Todos
			</div>

	);
};

export default SelectAll;
