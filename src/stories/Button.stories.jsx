import React from 'react';

import Button from './../components/shared/Button';

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: true,
  iconclasses: 'fa fa-lock',
  label: 'Button',
};

export const WithIconNoBorder = Template.bind({});
WithIconNoBorder.args = {
  noBorder: true,
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
