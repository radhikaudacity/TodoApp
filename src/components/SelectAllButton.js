import React from 'react';
import TodoManager from '../services/TodoManager';

const SelectAllButton = (context) => {
	const { state, setState } = context;

	const isAllSelected = TodoManager.isAllSelected(context);

	return (
		state.todos.length > 0 && <div>
			<input
				type="checkbox"
				checked={ isAllSelected }
				onChange={ ({ target: { checked }}) =>
					setState({
						...state,
						todos: TodoManager.toggleSelect(context, checked),
					}) }
			/>Select All Todos
		</div>

	);
};

export default SelectAllButton;
