import styled from "styled-components";

const mainColor = ({ theme }) => theme.colors.brand.primary;
const actionColor = ({ theme }) => theme.colors.brand.extraPrimary;
export const ButtonContainer = styled.button`
  background-color: transparent;
  appearance: none;
  padding: ${({ theme }) => theme.spacing.m};
  color: ${mainColor};
  border-color: ${mainColor};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  &:hover,
  &:active,
  &focus {
    color: ${actionColor};
    border-color: ${actionColor};
  }
`;
