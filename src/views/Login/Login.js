import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginStart } from "redux/auth/auth.actions";
import { selectIsAuthenticated } from "redux/auth/auth.selectors";
import { Container, Title, LoginBox } from "./Login.styles";
import { Input, Button } from "UI";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const onChangeCredentialsHandler = (field, value) =>
    setCredentials({ ...credentials, [field]: value });

  const onClickLoginHandler = () => dispatch(loginStart(credentials));

  const getInputType = (field) => (field === "password" ? "password" : "text");

  return isAuthenticated ? (
    <Redirect to="/users" />
  ) : (
    <Container>
      <Title>Skynet APP</Title>
      <LoginBox>
        {Object.keys(credentials).map((field) => (
          <Input
            key={field}
            placeholder={`Enter ${field}`}
            type={getInputType(field)}
            onChange={(e) => onChangeCredentialsHandler(field, e.target.value)}
          />
        ))}
        <Button onClick={onClickLoginHandler}>Enter</Button>
      </LoginBox>
    </Container>
  );
};

export default Login;
