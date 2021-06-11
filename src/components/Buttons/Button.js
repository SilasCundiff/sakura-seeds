import React from 'react';
import styled from 'styled-components';

const RectangleButton = styled.button`
  background: inherit;
  color: inherit;
  background: ${(props) =>
    props.ghost
      ? 'transparent'
      : props.inverted
      ? props.theme.colors.primaryColor
      : props.theme.colors.secondaryColor};
  /* Manual Background color theme override */
  background: ${(props) =>
    props.ghost
      ? 'transparent'
      : props.inverted
      ? props.primaryColor
      : props.secondaryColor};
  color: ${(props) =>
    props.inverted
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};
  /* Manual Background color theme override */
  color: ${(props) =>
    props.inverted ? props.secondaryColor : props.primaryColor};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.theme.colors.secondaryColor}`
        : `5px solid ${props.theme.colors.primaryColor}`
      : `none`};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.secondaryColor}`
        : `5px solid ${props.primaryColor}`
      : `none`};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};
  ${({ size }) => {
    if (size === 'small') return `font-size: 12px;  padding: 12px 20px;`;
    if (size === 'regular') return `font-size: 16px;  padding: 12px 24px;`;
    if (size === 'medium') return `font-size: 24px;  padding: 15px 28px;`;
    if (size === 'large') return `font-size: 30px;  padding: 15px 32px;`;
  }}
`;

const PillButton = styled.button`
  background: inherit;
  color: inherit;
  /* box-sizing: border-box; */
  &:after,
  &::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  background: ${(props) =>
    props.ghost
      ? 'transparent'
      : props.inverted
      ? props.theme.colors.primaryColor
      : props.theme.colors.secondaryColor};
  /* Manual Background color theme override */
  background: ${(props) =>
    props.ghost
      ? 'transparent'
      : props.inverted
      ? props.primaryColor
      : props.secondaryColor};
  color: ${(props) =>
    props.inverted
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};
  /* Manual Background color theme override */
  color: ${(props) =>
    props.inverted ? props.secondaryColor : props.primaryColor};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.theme.colors.secondaryColor}`
        : `5px solid ${props.theme.colors.primaryColor}`
      : `none`};
  border: ${(props) =>
    props.ghost
      ? props.inverted
        ? `5px solid ${props.secondaryColor}`
        : `5px solid ${props.primaryColor}`
      : `none`};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 28px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primaryFont.font};
  font-weight: ${(props) => props.theme.fonts.primaryFont.fontWeight};

  /* TODO */
  /* ${({ theme, primaryColor, secondaryColor, inverted, ghost }) => {
    console.log('theme exists', theme);
    console.log(`inverted`, inverted);
    // console.log(`ghost`, ghost);

    if (primaryColor || secondaryColor) {
      if (ghost)
        return `
        background: transparent; 
        color: ${inverted ? secondaryColor : primaryColor};
        border 5px solid ${inverted ? secondaryColor : primaryColor};
        `;
      if (inverted) {
        return `color: ${secondaryColor}; background: ${primaryColor};`;
      }
      return `color: ${primaryColor}; background: ${secondaryColor};`;
    }
    console.log('this ran');
  }} */

  ${({ size, ghost }) => {
    if (size === 'small')
      return `font-size: 12px;  ${
        ghost ? 'padding: 7px 23.5px; ' : 'padding: 12px 28px;'
      }`;
    if (size === 'regular')
      return `font-size: 16px;  ${
        ghost ? 'padding: 5.5px 25.5px; ' : 'padding: 10px 30px;'
      }`;
    if (size === 'medium')
      return `font-size: 24px;  ${
        ghost ? 'padding: 7px 27.5px; ' : 'padding: 12px 32px;'
      }`;
    if (size === 'large')
      return `font-size: 30px; border-radius: 38px;  ${
        ghost ? 'padding: 7px 33.5px; ' : 'padding: 12px 38px;'
      }`;
  }}
`;

const Button = ({
  children,
  type,
  inverted,
  ghost,
  primaryColor,
  secondaryColor,
  size,
}) => {
  switch (type) {
    case 'pill':
      return (
        <PillButton
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          inverted={inverted}
          ghost={ghost}
          size={size}
        >
          {children}
        </PillButton>
      );
    default:
      return (
        <RectangleButton
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          inverted={inverted}
          ghost={ghost}
          size={size}
        >
          {children}
        </RectangleButton>
      );
  }
};

export default Button;
