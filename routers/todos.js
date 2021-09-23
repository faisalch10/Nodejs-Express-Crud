const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  deleteTodoById,
  createTodo,
} = require("../controllers/todosController");

const middlewareFunc = require("../middleware/middlewares");
const { isAdmin } = require("../middleware/authMiddleware");

router.get("/", getTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.delete("/:id", isAdmin, deleteTodoById);

const person = {
  name: "john",
};

exports.router = router;
exports.person = person;
