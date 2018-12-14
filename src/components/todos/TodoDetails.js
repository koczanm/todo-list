import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const TodoDetails = props => {
  const { auth, todo } = props;

  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }

  const todoDetails = todo ? (
    <div className="section todo-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{todo.title}</span>
          <p>{todo.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by {todo.authorFirstName} {todo.authorLastName}
          </div>
          <div>9th December, 2 A.M.</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="center">
      <p>Loading todo...</p>
    </div>
  );

  return <div className="container">{todoDetails}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const todos = state.firestore.data.todos;
  const todo = todos ? todos[id] : null;

  return {
    auth: state.firebase.auth,
    todo: todo
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["todos"])
)(TodoDetails);
