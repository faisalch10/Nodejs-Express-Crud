let todos = [
  { id: 1, todoTitle: "Todo One" },
  { id: 2, todoTitle: "Todo Two" },
];

exports.getTodos = (req, res) => {
  console.log("run get todos");
  return res.status(200).json(todos);
};

exports.createTodo = (req, res) => {
  const newTodo = req.body;

  todos.push(newTodo);

  return res.status(201).json(todos);
};

exports.getTodoById = (req, res) => {
  console.log("run get todo by id");
  const todo = todos.find((todo) => todo.id === +req.params.id);

  return res.status(200).json(todo);
};

exports.deleteTodoById = (req, res) => {
  const todo = todos.filter((todo) => todo.id !== +req.params.id);

  todos = todo;

  return res.status(200).json(todo);
};
