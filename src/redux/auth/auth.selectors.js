import { createSelector } from "reselect";

const selectAuth = ({ auth }) => auth;

export const selectIsAuthenticated = createSelector(
  [selectAuth],
  ({ isAuthenticated }) => isAuthenticated
);
