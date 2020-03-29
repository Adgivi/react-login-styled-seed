import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.greyLightest};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes.l};
  top: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.brand.primary};
`;

export const LoginBox = styled.div`
  font-size: 3rem;
  padding: ${({ theme }) => theme.spacing.m};
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 100%;

  input + input {
    margin: ${({ theme }) => theme.spacing.xsm} 0
      ${({ theme }) => theme.spacing.m};
  }
`;
