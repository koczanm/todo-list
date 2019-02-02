import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Notifications from "./Notifications";
import TodoList from "../todos/TodoList";

class Dashboard extends Component {
  render() {
    const { auth, todos, notifications } = this.props;

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
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    todos: state.firestore.ordered.todos,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  firestoreConnect([
    { collection: "todos", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ]),
  connect(mapStateToProps)
)(Dashboard);
