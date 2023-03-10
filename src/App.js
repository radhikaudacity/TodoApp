import { React, useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import ListTodos from './components/ListTodos';
import ListActionButtons from './components//ListActionButtons';
import ClearCompletedButton from './components/ClearCompletedButton';
import SelectAllButton from './components/SelectAllButton';
import './App.scss';

const App = (context) => {
	const [state, setState] = useState({ todos: [],
		input: '', updatedTodo: null });

	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<div className="container">
			<Header/>
			<Inputs { ...extendedContext }/>
			<ListActionButtons/>
			<SelectAllButton { ...extendedContext }/>
			<ListTodos { ...extendedContext }/>
			<ClearCompletedButton { ...extendedContext }/>

		</div>
	</div>
	;
};

export default App;
