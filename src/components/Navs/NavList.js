import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  /* flex: 1 1 100%; */
  /* min-height: 100%; */
  width: 100%;
  height: 80%;
  position: absolute;
  inset: 10% 0 0;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.fonts.secondaryFont.font};
  font-weight: ${(props) => props.theme.fonts.secondaryFont.fontWeight};

  & .ButtonContainer {
    /* flex: 1 1 40%; */
    /* position: absolute; */
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`;

const NavList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default NavList;
