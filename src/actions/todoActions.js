export const createTodo = todo => {
  return (dispatch, getState) => {
    // TODO make async call to db
    dispatch({ type: "CREATE_TODO", todo });
  };
};
