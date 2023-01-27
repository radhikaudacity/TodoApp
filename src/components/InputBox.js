import React from 'react';
import AddTodoButton from './AddTodoButton';
import UpdateTodoButton from './UpdateTodoButton';

const InputBox = (context) => {
	const { state, setState } = context;

	return (
		<div>
			<input
				value={ state.input }
				onChange={ (event) =>
					setState({ ...state, input: event.target.value }) }
			/>
			{
				state.displayAdd
					?	<AddTodoButton { ...context }/>
					: <UpdateTodoButton{ ...context }/>
			}
		</div>
	);
};

export default InputBox;
