import React from 'react';
import styled from 'styled-components';

const StyledNavItem = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondaryColor};
  cursor: pointer;
`;

const NavListItem = ({ children }) => {
  return <StyledNavItem>{children}</StyledNavItem>;
};
export default NavListItem;
