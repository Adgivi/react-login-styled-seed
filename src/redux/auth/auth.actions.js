import t from "./auth.types";

export const loginStart = (credentials) => ({
  type: t.LOGIN_START,
  payload: credentials,
});

export const loginSuccess = (token) => ({
  type: t.LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: t.LOGIN_FAILURE,
  payload: error,
});
