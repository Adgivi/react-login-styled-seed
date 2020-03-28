import t from "./auth.types";

const initialState = { isAuthenticated: false, token: "" };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN_SUCCESS:
      return { isAuthenticated: true, token: action.payload.token };
    default:
      return state;
  }
};

export default authReducer;
