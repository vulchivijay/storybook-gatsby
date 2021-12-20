import React from 'react'
import { Header } from './../components/Header'

export default {
  title: 'App/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appLogo: {
    url: './../images/icon.png',
    altText: 'App Logo'
  },
  appTitle: "Gatsby",
  appNavBar: {
    home: {
      url: '/',
      label: 'Home'
    },
    about: {
      url: '/about',
      label: 'About'
    },
    blog: {
      url: '/blog',
      label: 'Blog'
    }
  },
};

// export const Secondary = Template.bind({});
// Secondary.args = {};
