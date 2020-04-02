import styled from "styled-components";

import theme from "theme";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.greyLightest};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const List = styled.ul`
  background-color: #fff;
`;

export const UserListItem = styled.li`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.l};
  
  & + & {
    border-top: 1px solid black;
  }
`;
