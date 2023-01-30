import React from 'react';
import TodoManager from '../services/TodoManager';
import AddTodoButton from './AddTodoButton';
import UpdateTodoButton from './UpdateTodoButton';

const controls = {
	update: UpdateTodoButton,
	add: AddTodoButton,
};

const ActionButton = (context) => {
	const mode = TodoManager.getMode(context);
	const Control = controls[mode];

	return <Control { ...context }/>;
};

export default ActionButton;
