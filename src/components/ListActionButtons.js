import React from 'react';

import RadioButton from './RadioButton';

const ListActionButtons = (context) =>
	<fieldset>
		<legend>What do you want to see?</legend>
		<RadioButton { ...
			{ ...context, data: { id: 'all', value: 'All' }} }
		/>
		<RadioButton { ...
			{ ...context, data:	{ id: 'active', value: 'Active' }} }

		/>
		<RadioButton { ...
			{ ...context, data: { id: 'completed', value: 'Completed' }} }
		/>

	</fieldset>
	;

export default ListActionButtons;
