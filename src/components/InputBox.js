import React from 'react';
import AddTodoButton from './AddTodoButton';
import UpdateTodoButton from './UpdateTodoButton';

const InputBox = (context) => {
	const { state, setState, displayAdd } = context;

	return (
		<div>
			<input
				value={ state.input }
				onChange={ (event) =>
					setState({ ...state, input: event.target.value }) }
			/>
			<AddTodoButton { ...context }/>
			<UpdateTodoButton{ ...context }/>
			<div/>
		</div>
	);
};

export default InputBox;
