import { React, useState } from 'react';
import InputBox from './components/InputBox';
import ListTodos from './components/ListTodos';

import './App.scss';
import { peek } from '@laufire/utils/debug';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodos = (inputValue) => {
		setTodos((prev) => [...prev, inputValue]);
		peek(todos);
	};
	const deleteTodos = (id) => {
		setTodos(todos.filter((todo, index) => index !== id));
	};

	return <div className="App">
		<div className="container">
			<h1> Todo App</h1>
			<InputBox addTodos={ addTodos }/>
			<ListTodos todos={ todos } deleteTodos={ deleteTodos }/>
		</div>
	</div>
	;
};

export default App;
