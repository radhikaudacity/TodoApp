/* eslint-disable max-lines-per-function */
import { peek } from '@laufire/utils/debug';
import React from 'react';

const ListTodos = ({ todos, deleteTodos, checkTodos }) => {
	const handleChange = ({ target: { checked }}, todo) => {
		peek(checked);
		checkTodos(todo, checked);
	};

	return <ul>{todos.map((todo, index) =>
		<li key={ index }>
			<div 	className="list-display">
				<input
					onChange={ (event) => handleChange(event, todo) }
					id="checkbox"
					type="checkbox"
					checked={ todo.checked }
				/>{todo.text}
			</div>
			<div>
				<button
					id={ index }
					onClick={ () => deleteTodos(todo.id) }
				>Delete</button>
			</div>
		</li>)}</ul>;
};

export default ListTodos;
