const isInputEmpty = ({ state: { input }}) => input === '';

const handleDelete = ({ state, setState }, id) => {
	setState({
		...state,
		todos: [...state.todos.filter((todo) => todo.id !== id)],
	});
};

const toggleCompleted = ({ state, data: { checked, todo }}) =>
	state.todos.map((item) => (item.id === todo.id
		? { ...item, checked }
		: item));

const updateTodo = ({ state }) =>
	state.todos.map((item) => (item.id === state.toBeUpdatedId.id
		? { ...item, text: state.input }
		: item));

const TodoManger = { isInputEmpty, handleDelete, toggleCompleted, updateTodo };

export default TodoManger;
