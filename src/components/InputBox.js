import React from 'react';

const InputBox = (context) => {
	const { state, setState } = context;

	return (

		<input
			value={ state.input }
			onChange={ (event) =>
				setState({ ...state, input: event.target.value }) }
		/>

	);
};

export default InputBox;
