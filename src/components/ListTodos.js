/* eslint-disable max-lines-per-function */
import React from 'react';

const handleChange = (
	{ state, setState }, event, todo
) =>
	setState({
		...state,
		todos: state.todos.map((item) => (item.id === todo.id
			? { ...item, checked: event.target.checked }
			: item)),

	});

const handleDelete = ({ state, setState }, id) => {
	setState({
		...state,
		todos: [...state.todos.filter((todo) => todo.id !== id)],
	});
};

const ListTodos = (context) => {
	const { state, setState } = context;
	const { todos } = state;

	return <ul>{todos.map((todo, index) =>
		<li key={ index }>
			<div 	className="list-display">
				<input
					onChange={ (event) => handleChange(
						context, event, todo
					) }
					type="checkbox"
					checked={ todo.checked }
				/>{todo.text}
			</div>
			<div>
				<button
					id={ index }
					onClick={ () => handleDelete(context, todo.id) }
				>Delete</button>
			</div>
		</li>)}</ul>;
};

export default ListTodos;
