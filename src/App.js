/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ListTodos from './components/ListTodos';

import './App.scss';
import ClearCompleted from './components/ClearCompleted';
import SelectAll from './components/SelectAll';

const App = (context) => {
	const [state, setState] = useState({ todos: [], input: '' });

	return <div className="App">
		<div className="container">
			<Header/>
			<InputBox { ...{ ...context, state, setState } }/>
			<ListTodos { ...{ ...context, state, setState } }/>
			<ClearCompleted { ...{ ...context, state, setState } }/>
			<SelectAll { ...{ ...context, state, setState } }/>
		</div>
	</div>
	;
};

export default App;
