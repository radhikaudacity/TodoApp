import React from 'react';

const ListActionButtons = (context) => {
	const { state, setState } = context;

	return <div>
		<fieldset>
			<legend>Please select</legend>
			<span><input id="all" value="All" type="radio" name="list"/>
				<label htmlFor="all">All</label></span>
			<input id="completed" value="Completed" type="radio" name="list"/>
			<label htmlFor="completed">Completed</label>
			<input id="active" value="Active" type="radio" name="list"/>
			<label htmlFor="active">Active</label>
		</fieldset>
	</div>;
};

export default ListActionButtons;
