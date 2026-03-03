const loadTodo = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/1/todos";
  const res = await fetch(url);
  const data = await res.json();
  displayTodos(data);
};

const displayTodos = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="todo-card">
        <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
        <h4>${todo.title}</h4>
    </div>
    `;
    todoContainer.append(div);
  });
};

loadTodo();
