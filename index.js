const express = require("express");
const { router: todosRouter, person } = require("./routers/todos");
const userRouter = require("./routers/users");
const {
  middlewareFunc,
  validatorMiddleware,
} = require("./middleware/middlewares");

const { protect } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use("/todos", protect, todosRouter);
app.use("/users", userRouter);

app.listen(5000, () => console.log("Server is listen on port 5000"));
