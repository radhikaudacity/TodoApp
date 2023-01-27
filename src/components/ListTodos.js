/* eslint-disable max-lines-per-function */
import React from 'react';
import TodoManager from '../services/TodoManger';
import InputBox from './InputBox';

const displayClickedInInput = (context) => {
	const { state, setState, data: { todo }} = context;

	setState({ ...state, input: todo.text,
		displayAdd: false, toBeUpdatedId: todo.id });

	return <InputBox { ...context }/>;
};

const ListTodos = (context) => {
	const { state, setState } = context;
	const { todos } = state;

	return <ul>{todos.map((todo, index) =>
		<li key={ index }>
			<div 	className="list-display">
				<input
					onChange={
						({ target: { checked }}) =>
							setState({ ...state,
								todos: TodoManager.toggleCompleted({ ...context,
									data: { checked, todo }}) })
					}
					type="checkbox"
					checked={ todo.checked }
				/>
				<span onClick={
					() => displayClickedInInput({ ...context, data: { todo }})
				}
				>{todo.text}</span>
			</div>
			<div>
				<button
					id={ index }
					onClick={ () => TodoManager.handleDelete(context, todo.id) }
				>Delete</button>
			</div>
		</li>)}</ul>;
};

export default ListTodos;
