import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';

const isInputEmpty = ({ state: { input }}) => input === '';

const addTodo = ({ state }) =>
	[...state.todos,
		{
			text: state.input,
			checked: false,
			id: rndString(),

		}];

const deleteTodo = ({ state }, id) =>
	state.todos.filter((todo) => todo.id !== id);

const toggleCompleted = ({ state, data: { checked, todo }}) =>
	state.todos.map((item) => (item.id === todo.id
		? { ...item, checked }
		: item));

const isAllSelected = ({ state }) =>
	state.todos.every((todo) => todo.checked);

const isAnySelected = ({ state }) =>
	state.todos.some((todo) => todo.checked);

const updateTodo = ({ state }) =>
	state.todos.map((item) => (item.id === state.updatedTodo.id
		? { ...item, text: state.input }
		: item));

const clearTodos = ({ state }) =>
	state.todos.filter((todo) => !todo.checked);

const toggleSelect = ({ state, data }) =>
	state.todos.map((todo) =>
		({ ...todo, checked: data }));

const	getMode = ({ state }) =>	(state.updatedTodo ? 'update' : 'add');

const radioCheck = ({ state, data }) => {
	peek(data.checked);
};

const TodoManager = { isInputEmpty, addTodo,
	deleteTodo, toggleCompleted, updateTodo,
	clearTodos, toggleSelect, isAllSelected,
	isAnySelected, getMode, radioCheck };

export default TodoManager;
