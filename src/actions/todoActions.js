export const createTodo = todo => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("todos")
      .add({
        ...todo,
        authorId: 123,
        authorFirstName: "Will",
        authorLastName: "Smith",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_TODO_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_RODO_ERROR" }, err);
      });
  };
};
