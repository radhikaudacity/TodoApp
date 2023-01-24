import React from 'react';

const ListTodos = ({ todos, deleteTodos }) => <ul>{todos.map((todo, index) =>
	<li key={ index }>{todo}
		<button
			id={ index }
			onClick={ () => deleteTodos(index) }
		>Delete</button>
	</li>)}</ul>;

export default ListTodos;
