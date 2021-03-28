import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.header};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: all 0.2s ease;
`;
