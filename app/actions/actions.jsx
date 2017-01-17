export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

// toggleShowCompleted
export var toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export var addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text
	};
};

// toggleTodo(id)
export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};