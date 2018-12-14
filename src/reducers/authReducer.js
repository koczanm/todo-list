const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      console.log("sign in success");
      return {
        ...state,
        authError: null
      };
    case "SIGN_IN_ERROR":
      console.log("sign in error");
      return {
        ...state,
        authError: "Sign in failed"
      };
    default:
      return state;
  }
};

export default authReducer;
