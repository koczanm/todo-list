import React from "react";
import { Link } from "react-router-dom";

import TodoSummary from "./TodoSummary";

const TodoList = ({ todos }) => {
  const todoList = todos ? (
    todos.map(todo => {
      return (
        <Link to={"/todo/" + todo.id} key={todo.id}>
          <TodoSummary todo={todo} />
        </Link>
      );
    })
  ) : (
    <div className="center">No todo's left</div>
  );

  return <div className="todo-list section">{todoList}</div>;
};

export default TodoList;
