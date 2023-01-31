import { peek } from '@laufire/utils/debug';
import React from 'react';
import TodoManager from '../services/TodoManager';

const RadioButton = (data, context) => {
	const { id, value } = data;

	peek({ ...id });
	return <span>
		<input
			id={ id }
			value={ value }
			type="radio"
			name="list"
			onChange={ ({ target }) =>
				TodoManager.radioCheck({ ...context, target }) }
		/>
		<label htmlFor={ id }>{value}</label>
	</span>;
};

export default RadioButton;
