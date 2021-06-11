import React from 'react';
import Nav from '../components/Navs/Nav';
import NavList from '../components/Navs/NavList';
import NavListItem from '../components/Navs/NavListItem';
import NavLogo from '../components/Navs/NavLogo';
import Button from '../components/Buttons/Button';
export default {
  title: 'Components/Nav',
  component: Nav,
  subcomponents: { NavLogo, NavList },
  parameters: { layout: 'fullscreen' },
  argTypes: {},
};

const NavTemplate = ({ items, buttons, ...args }) => (
  <Nav {...args}>
    <NavLogo>PlaceholderLogo</NavLogo>
    <NavList>
      {items.map((item) => (
        <NavListItem>{item}</NavListItem>
      ))}
      <div className='ButtonContainer'>
        {buttons.map((button) => (
          <Button
            size={button.size}
            type={button.type}
            inverted={button.inverted}
            ghost={button.ghost}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </NavList>
  </Nav>
);

export const EmptyNav = NavTemplate.bind({});
EmptyNav.args = { items: [], buttons: [] };

export const OneNav = NavTemplate.bind({});
OneNav.args = { items: ['one', 'two', 'tree'], buttons: [] };

export const ButtonNav = NavTemplate.bind({});
ButtonNav.args = {
  items: ['one', 'two', 'tree'],
  buttons: [
    {
      text: 'Sign In',
      size: 'small',
      type: 'pill',
      inverted: false,
      ghost: false,
    },
    {
      text: 'Sign Up',
      size: 'small',
      type: 'pill',
      inverted: true,
      ghost: true,
    },
  ],
};
