import { createSelector } from "reselect";

const selectUser = ({ user }) => user;

export const selectUserList = createSelector([selectUser], ({ list }) => list);
