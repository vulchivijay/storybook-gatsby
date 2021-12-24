import React from 'react';

import FullWidthImage from './../components/shared/fullWidthImage';

export default {
  title: 'Prototypes/FullWidthImage',
  component: FullWidthImage,
};

const Template = (args) => <FullWidthImage {...args} />;

export const TextCenter = Template.bind({});
TextCenter.args = {
  imageUrl: "",
  title: "Lorem Ipsum is simply dummy text of the printing.",
  para: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  buttons: {
    "signin": {
      url: "/",
      label: "Sign in"
    },
    "scheduleademo": {
      url: "/",
      label: "Schedule a demo"
    }
  },
  position: "center"
};

export const TextLeft = Template.bind({});
TextLeft.args = {
  imageUrl: "",
  title: "Lorem Ipsum is simply dummy text and typesetting industry.",
  para: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  buttons: {
    "signin": {
      url: "/",
      label: "Sign in"
    },
    "scheduleademo": {
      url: "/",
      label: "Schedule a demo"
    }
  },
  position: "left"
};

export const TextRight = Template.bind({});
TextRight.args = {
  imageUrl: "",
  title: "Simply dummy text of the printing and typesetting industry.",
  para: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  buttons: {
    "signin": {
      url: "/",
      label: "Sign in"
    },
    "scheduleademo": {
      url: "/",
      label: "Schedule a demo"
    }
  },
  position: "right"
};
