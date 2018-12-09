const initState = {
  todos: [
    { id: "1", title: "learn react", content: "blah blah blah" },
    { id: "2", title: "make lunch", content: "blah blah blah" },
    { id: "3", title: "go to the gym", content: "blah blah blah" }
  ]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("create todo", action.todo);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
