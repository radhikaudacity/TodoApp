import React from 'react';
import TodoManager from '../services/TodoManager';

const CheckBox = (context) => {
	const { state, setState, data: todo } = context;

	return (
		<input
			onChange={
				({ target: { checked }}) =>
					setState({ ...state,
						todos: TodoManager.toggleCompleted({ ...context,
							data: { checked, todo }}) })
			}
			type="checkbox"
			checked={ todo.checked }
		/>);
};

export default CheckBox;
