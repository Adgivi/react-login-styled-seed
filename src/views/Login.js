import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginStart } from "../redux/auth/auth.actions";
import { selectIsAuthenticated } from "../redux/auth/auth.selectors";

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
    <Redirect to="/main" />
  ) : (
    <div>
      {Object.keys(credentials).map((field) => (
        <input
          key={field}
          type={getInputType(field)}
          onChange={(e) => onChangeCredentialsHandler(field, e.target.value)}
        />
      ))}
      <button onClick={onClickLoginHandler}>Login</button>
    </div>
  );
};

export default Login;
