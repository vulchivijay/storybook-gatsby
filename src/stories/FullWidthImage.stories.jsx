import React from 'react';

import FullWidthImage from './../components/shared/fullWidthImage';

export default {
  title: 'Prototypes/FullWidthImage',
  component: FullWidthImage,
};

const Template = (args) => <FullWidthImage {...args} />;

export const OneColumn = Template.bind({});
OneColumn.args = {
  type: "onecolumn",
  imageUrl: "./assets/bg_home.webp",
  title: "Unified, cloud-based test automation platform, powered by AI",
  para: "Testsigma uses AI to create stable and reliable automated tests faster than ever and to speed-up the executions and maintenance of your automated tests. No coding skills required.",
  points: [
    "Eliminate complex setups & frameworks",
    "Write tests 5X faster using plain English",
    "End-to-end testing for Web, Mobile apps &APIs",
    "Zero maintenance with AI-driven stability",
  ],
  "signin": {
    primary: true,
    url: "/",
    text: "Sign in",
  },
  "scheduleademo": {
    url: "/",
    text: "Schedule a demo"
  },
  position: "center"
};

export const TwoColumn = Template.bind({});
TwoColumn.args = {
  type: "twocolumn",
  imageUrl: "./../../stories/assets/i21.png",
  title: "Unified, cloud-based test automation platform, powered by AI",
  para: "Testsigma uses AI to create stable and reliable automated tests faster than ever and to speed-up the executions and maintenance of your automated tests. No coding skills required.",
  points: [
    "Eliminate complex setups & frameworks",
    "Write tests 5X faster using plain English",
    "End-to-end testing for Web, Mobile apps &APIs",
    "Zero maintenance with AI-driven stability",
  ],
  "signin": {
    primary: true,
    url: "/",
    text: "Sign up for free"
  },
  "scheduleademo": {
    url: "/",
    text: "Schedule a demo"
  },
  position: "left"
};
