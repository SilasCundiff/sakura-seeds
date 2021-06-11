import React from 'react';
import Button from '../components/Buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  children: 'Demo Button',
  type: 'pill',
  inverted: false,
  ghost: false,
  size: 'large',
  // primaryColor: 'white',
  // secondaryColor: 'dodgerblue',
};
