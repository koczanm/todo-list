import React, { Component } from "react";
import { connect } from "react-redux";

import Notifications from "./Notifications";
import TodoList from "../todos/TodoList";

class Dashboard extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5">
            <TodoList todos={todos} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

export default connect(mapStateToProps)(Dashboard);
