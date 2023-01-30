import React from 'react';
import InputBox from './InputBox';
import ActionButton from './ActionButton';

const Inputs = (context) =>
	<div>
		<InputBox { ...context }/>
		<ActionButton { ...context }/>
	</div>;

export default Inputs;
