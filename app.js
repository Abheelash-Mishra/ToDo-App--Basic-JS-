const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const renderTodoList = () => {
  todoList.innerHTML = '';

  const todos = getTodosFromLocalStorage();

  todos.forEach((todo) => {
    const li = document.createElement('li');
    const todoSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    todoSpan.innerText = todo;
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteButton.addEventListener('click', () => {
      deleteTodoFromLocalStorage(todo);
    });

    li.appendChild(todoSpan);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
};

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todos = getTodosFromLocalStorage();
    todos.push(todoText);
    saveTodosToLocalStorage(todos);
    renderTodoList();

    todoInput.value = '';
  }
};

const deleteTodoFromLocalStorage = (todo) => {
  const todos = getTodosFromLocalStorage();
  const updatedTodos = todos.filter((item) => item !== todo);
  saveTodosToLocalStorage(updatedTodos);
  renderTodoList();
};


addButton.addEventListener('click', addTodo);

let addButtonClicks = 0;

const handleAddButtonClick = () => {
  addButtonClicks++;
  if (addButtonClicks === 3) {
    alert("Wow! Looks like you unlocked an easter egg! :)");
    setTimeout(() => {
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank");
	  }, 2000);
  }
};

addButton.addEventListener('click', handleAddButtonClick);

renderTodoList();