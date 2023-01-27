import { peek } from '@laufire/utils/debug';
import React from 'react';

const handleChange = (event, { state, setState }) => {
	peek(event.target.checked);
	setState({
		...state, todos: state.todos.map((todo) =>
			({ ...todo, checked: event.target.checked })),
	});
};

const SelectAll = (context) => {
	const { state } = context;

	return (
		state.todos.length > 0
			? <div>
				<input
					type="checkbox"
					onChange={ (event) => handleChange(event, context) }
				/>Select All Todos
			</div>
			: <div/>
	);
};

export default SelectAll;
