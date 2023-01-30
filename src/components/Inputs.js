import React from 'react';
import InputBox from './InputBox';
import ActionButtons from './ActionButtons';

const Inputs = (context) =>
	<div>
		<InputBox { ...context }/>
		<ActionButtons { ...context }/>
	</div>;

export default Inputs;
