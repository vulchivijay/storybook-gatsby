import React from 'react';

import FullWidthStripe from "./../components/shared/FullWidthStripe"

export default {
  title: 'Prototypes/FullWidthStripe',
  component: FullWidthStripe,
};

const Template = (args) => <FullWidthStripe {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  para: "Improve test coverage with proper data sets and well-managed data-driven testing approach.",
  button: {
    url: "/",
    text: "Start your free trail now"
  },
  link: {
    url: "/",
    text: "Learn more"
  },
  extraPara: "Checkout a detailed mobile testing guide here"
};

export const Secondary = Template.bind({});
Secondary.args = {
  para: "Enables everyone including SMEs & QAs to write automated tests using simple English. No coding skills required.",
  digits: "1300000+ No of Tests Executed"
};