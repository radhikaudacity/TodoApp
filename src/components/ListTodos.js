import React from 'react';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';
import SpanText from './SpanText';

const ListTodos = (context) => {
	const { state: { todos }} = context;

	return <ul>{todos.map((todo, index) =>
		<li key={ index }>
			<div 	className="list-display">
				<CheckBox { ...{ ...context, data: todo } }/>
				<SpanText { ...{ ...context, data: todo } }/>
			</div>
			<div>
				<DeleteButton { ...{ ...context, data: { todo, index }} }/>
			</div>
		</li>)}</ul>;
};

export default ListTodos;
