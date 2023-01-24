import React, { useState } from 'react';

const InputBox = ({ addTodos }) => {
	const [inputVal, setInputValue] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;

		setInputValue(value);
	};

	const handleAddClick = () => {
		addTodos(inputVal);
		setInputValue('');
	};

	return (
		<div><input value={ inputVal } onChange={ handleChange } name="todo"/>
			<button
				onClick={ handleAddClick }
				disabled={ inputVal === '' }
			>Add item</button>
			<div/></div>
	);
};

export default InputBox;
