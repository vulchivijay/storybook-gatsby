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
      "link1": {
        url: "",
        text: "Use cases",
        "submenu": {
          "link1": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link2": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link3": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link4": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
        }
      },
      "link2": {
        url: "",
        text: "Features",
        "submenu": {
          "link1": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link2": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link3": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link4": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
        }
      },
      "link3": {
        url: "/",
        text: "Pricing",
      },
      "link4": {
        url: "",
        text: "Resources",
        "submenu": {
          "link1": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link2": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link3": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link4": {
            url: '/',
            text: "Web Application Testing",
            subText: "Testing web application end to end"
          },
        }
      },
    },
  }
};