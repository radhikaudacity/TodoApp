import React from 'react';

const SpanText = (context) => {
	const { state, setState, data } = context;

	return (
		<span onClick={
			() => setState({ ...state,
				input: data.text,
				updatedTodo: data })
		}
		>{data.text}</span>
	);
};

export default SpanText;
