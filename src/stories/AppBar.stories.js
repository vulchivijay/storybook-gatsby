import React from 'react';

import { Header } from './../components/Header';

export default {
  title: 'App/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appTitle: "Gatsby",
};

// export const Secondary = Template.bind({});
// Secondary.args = {};
