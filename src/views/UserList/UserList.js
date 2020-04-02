import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Container, List, UserListItem } from "./UserList.styles";
import { selectUserList } from "redux/user/user.selectors";
import { getUserListStart } from "redux/user/user.actions";

const UserList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectUserList);

  useEffect(() => {
    dispatch(getUserListStart());
  }, [dispatch]);

  return (
    <Container>
      <List>
        {list.map((user) => (
          <UserListItem key={user.id}>
            <Link to={`users/detail/${user.id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </UserListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserList;
