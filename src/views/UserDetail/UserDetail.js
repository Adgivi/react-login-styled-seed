/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "api/api";
import { Input, Button } from "UI";
import {
  Container,
  UserForm,
  FromControl,
  ButtonsGroup,
  Label,
} from "../UserDetail/UserDetail.styles";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    data: null,
    status: {
      isLoading: false,
      isUpdated: false,
      isDeleted: false,
    },
  });

  useEffect(() => {
    setUser({ ...user, status: { ...user.status, isLoading: true } });
    api.getUser(id).then((user) => {
      setUser({ data: user, status: { ...user.status, isLoading: false } });
    });
  }, [id]);

  const onChangeDataFieldHandler = (field, value) =>
    setUser({ ...user, [field]: value });

  const onClickSaveHandler = () => {
    setUser({ ...user, status: { ...user.status, isLoading: true } });
    api.updateUser(id, user).then(() =>
      setUser({
        ...user,
        status: { ...user.status, isUpdated: true, isLoading: false },
      })
    );
  };

  const onClickDeleteHandler = () => {
    setUser({ ...user, status: { ...user.status, isLoading: true } });
    api.deleteUser(id).then(() =>
      setUser({
        ...user,
        status: { ...user.status, isDeleted: true, isLoading: false },
      })
    );
  };

  return (
    <Container>
      {user.status.isLoading && <div>Loading...</div>}
      {user.data && (
        <UserForm>
          <FromControl>
            <Label>First Name</Label>
            <Input
              type="text"
              value={user.data.first_name}
              onChange={({ target }) =>
                onChangeDataFieldHandler("first_name", target.value)
              }
            />
          </FromControl>
          <FromControl>
            <Label>Last Name</Label>
            <Input
              type="text"
              value={user.data.last_name}
              onChange={({ target }) =>
                onChangeDataFieldHandler("last_name", target.value)
              }
            />
          </FromControl>
          {!user.status.isLoading && (
            <ButtonsGroup>
              <Button onClick={onClickSaveHandler}>Save</Button>
              <Button onClick={onClickDeleteHandler}>Delete</Button>
            </ButtonsGroup>
          )}
        </UserForm>
      )}
    </Container>
  );
};

export default UserDetail;
