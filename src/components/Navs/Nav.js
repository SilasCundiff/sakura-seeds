import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  /* padding: 8px; */
  background: ${(props) => props.theme.colors.primaryColor};
  position: absolute;
`;

const Nav = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

export default Nav;
