import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Prototypes/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    appLogo: {
      url: './../images/icon.png',
      altText: 'App Logo'
    },
    appTitle: "Gatsby",
    appNavBar: {
      "Menu 1": {
        url: "",
        label: "Menu 1",
        "submenu": {
          "Sub Menu 1": {
            url: '/menu-1',
            label: "Sub menu 1"
          },
          "Sub Menu 2": {
            url: '/menu-2',
            label: "Sub menu 2"
          },
          "Sub Menu 3": {
            url: '/menu-3',
            label: "Sub menu 3"
          },
        }
      },
      "Menu 2": {
        url: "",
        label: "Menu 2",
        "submenu": {
          "Sub Menu 1": {
            url: '/menu-1',
            label: "Sub menu 1"
          },
          "Sub Menu 2": {
            url: '/menu-2',
            label: "Sub menu 2"
          },
          "Sub Menu 3": {
            url: '/menu-3',
            label: "Sub menu 3"
          },
        }
      },
      "Menu 3": {
        url: "/",
        label: "Menu 3",
      },
    },
  }
};