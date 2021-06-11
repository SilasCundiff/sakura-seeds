import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  /* flex: 1 1 30%; */
  /* min-height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10%;
  background: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
`;

const NavLogo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export default NavLogo;
