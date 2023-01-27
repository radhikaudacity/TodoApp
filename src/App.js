/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ListTodos from './components/ListTodos';

import './App.scss';
import ClearCompleted from './components/ClearCompleted';
import SelectAll from './components/SelectAll';

const App = (context) => {
	const [state, setState] = useState({ todos: [],
		input: '', displayAdd: true, toBeUpdatedId: '' });

	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<div className="container">
			<Header/>
			<InputBox { ...extendedContext }/>
			<SelectAll { ...extendedContext }/>
			<ListTodos { ...extendedContext }/>
			<ClearCompleted { ...extendedContext }/>

		</div>
	</div>
	;
};

export default App;
