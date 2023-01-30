import React from 'react';
import AddTodoButton from './AddTodoButton';
import UpdateTodoButton from './UpdateTodoButton';

const ActionButtons = (context) => {
	const { state: { toBeUpdatedId }} = context;

	return toBeUpdatedId === ''
		?	<AddTodoButton { ...context }/>
		: <UpdateTodoButton{ ...context }/>;
};

export default ActionButtons;
