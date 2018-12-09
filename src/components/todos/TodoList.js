import React from "react";

import TodoSummary from "./TodoSummary";

const TodoList = ({ todos }) => {
  const todoList = todos ? (
    todos.map(todo => {
      return <TodoSummary todo={todo} key={todo.id} />;
    })
  ) : (
    <div className="center">No todo's left</div>
  );

  return <div className="todo-list section">{todoList}</div>;
};

export default TodoList;
