import t from "./user.types";

const initialState = {
  list: [],
  detail: {},
  isLoading: false,
  isUpdated: false,
  isDeleted: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_USER_LIST_START:
      return { ...state, isLoading: true };
    case t.GET_USER_LIST_SUCCESS:
      return { ...state, list: action.payload, isLoading: false };
    case t.GET_USER_LIST_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
