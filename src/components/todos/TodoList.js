import React from "react";

import TodoSummary from "./TodoSummary";

const TodoList = () => {
  return (
    <div className="todo-list section">
      <TodoSummary />
      <TodoSummary />
      <TodoSummary />
    </div>
  );
};

export default TodoList;
