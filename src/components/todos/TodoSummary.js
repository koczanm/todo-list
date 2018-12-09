import React from "react";

const TodoSummary = ({ todo }) => {
  return (
    <div className="card z-depth-0 todo-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{todo.title}</span>
        <p>Posted by koczanm</p>
        <p className="grey-text">9th December, 2 A.M.</p>
      </div>
    </div>
  );
};

export default TodoSummary;
