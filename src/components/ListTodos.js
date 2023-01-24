import React from 'react';

const ListTodos = ({ todos, deleteTodos }) => <ul>{todos.map((todo, index) =>
	<li key={ index }>{todo}
	</li>)}</ul>;

export default ListTodos;