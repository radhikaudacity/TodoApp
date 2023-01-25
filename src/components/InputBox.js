import { rndString } from '@laufire/utils/random';
import React, { useState } from 'react';

const InputBox = ({ addTodos }) => {
	const [input, setInput] = useState({ text: '' });

	const handleChange = (e) => {
		const { value } = e.target;

		setInput({ id: rndString(), text: value, checked: false });
	};

	const handleAddClick = () => {
		addTodos(input);
		setInput({ text: '' });
	};

	return (
		<div><input value={ input.text } onChange={ handleChange } name="todo"/>
			<button
				onClick={ handleAddClick }
				disabled={ input.text === '' }
			>Add item</button>
			<div/></div>
	);
};

export default InputBox;
