const initialState = {
  jwt: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "JWT":
      return {
        ...state,
        jwt: action.value
      };
    default:
      return state;
  }
};

export default reducer;