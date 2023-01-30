import React from 'react';
import TodoManager from '../services/TodoManager';

const RadioButton = ({ id, value }, context) =>
	<span>
		<input
			id={ id }
			value={ value }
			type="radio"
			name="list"
			onChange={ ({ target }) =>
				TodoManager.radioCheck({ ...context, target }) }
		/>
		<label htmlFor="all">All</label>
	</span>;

export default RadioButton;
