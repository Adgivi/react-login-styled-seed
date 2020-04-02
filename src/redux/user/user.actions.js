import t from "./user.types";

export const getUserListStart = () => ({
  type: t.GET_USER_LIST_START,
});

export const getUserListSuccess = (list) => ({
  type: t.GET_USER_LIST_SUCCESS,
  payload: list,
});

export const getUserListFailure = (error) => ({
  type: t.GET_USER_LIST_FAILURE,
  payload: error,
});
