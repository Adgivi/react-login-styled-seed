import React from "react";
import PropTypes from "prop-types";

import { ButtonContainer } from "./Button.styles";

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);

Button.propTypes = { children: PropTypes.string };

export default Button;
