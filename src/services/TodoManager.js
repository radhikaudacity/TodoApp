const isInputEmpty = ({ state: { input }}) => input === '';

const handleDelete = ({ state }, id) => {
	state.todos.filter((todo) => todo.id !== id);
};

const toggleCompleted = ({ state, data: { checked, todo }}) =>
	state.todos.map((item) => (item.id === todo.id
		? { ...item, checked }
		: item));

const updateTodo = ({ state }) =>
	state.todos.map((item) => (item.id === state.toBeUpdatedId
		? { ...item, text: state.input }
		: item));

const TodoManager = { isInputEmpty, handleDelete, toggleCompleted, updateTodo };

export default TodoManager;
