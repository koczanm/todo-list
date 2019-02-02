export const createTodo = todo => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("todos")
      .add({
        ...todo,
        authorId: authorId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
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
