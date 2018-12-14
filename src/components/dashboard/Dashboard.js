import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Notifications from "./Notifications";
import TodoList from "../todos/TodoList";

class Dashboard extends Component {
  render() {
    const { auth, todos } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

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
    auth: state.firebase.auth,
    todos: state.firestore.ordered.todos
  };
};

export default compose(
  firestoreConnect(["todos"]),
  connect(mapStateToProps)
)(Dashboard);
