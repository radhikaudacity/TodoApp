/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import ListTodos from './components/ListTodos';

import './App.scss';
import { peek } from '@laufire/utils/debug';

const App = () => {
	const [todos, setTodos] = useState([]);
	// const [state, setState] = useState();

	const addTodos = (input) => {
		setTodos((prev) => [...prev, input]);
		peek(todos);
	};
	const deleteTodos = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const checkTodos = (todo, checked) =>
		setTodos(() =>	todos.map((item) =>
			(item.id === todo.id
				? { ...item, checked }
				: item)));

	return <div className="App">
		<div className="container">
			<Header/>
			<InputBox addTodos={ addTodos }/>
			<ListTodos
				todos={ todos }
				deleteTodos={ deleteTodos }
				setTodos={ setTodos }
				checkTodos={ checkTodos }

			/>
		</div>
	</div>
	;
};

export default App;
