import React from 'react';

import Footer from '../components/Footer';

export default {
  title: 'Prototypes/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Columns = Template.bind({});
Columns.args = {
  data: {
    column1: {
      title: "Features",
      links: {
        home: {
          url: "/",
          label: "Home"
        },
        About: {
          url: "/about",
          label: "About"
        },
        Blog: {
          url: "/blog",
          label: "Blog"
        },
        Contact: {
          url: "/contact",
          label: "Contact"
        },
      },
    },
    column2: {
      title: "Guides",
      links: {
        home: {
          url: "/",
          label: "Home"
        },
        About: {
          url: "/about",
          label: "About"
        },
        Blog: {
          url: "/blog",
          label: "Blog"
        },
        Contact: {
          url: "/contact",
          label: "Contact"
        },
      }
    },
    column3: {
      title: "Comparison",
      links: {
        home: {
          url: "/",
          label: "Home"
        },
        About: {
          url: "/about",
          label: "About"
        },
        Blog: {
          url: "/blog",
          label: "Blog"
        },
        Contact: {
          url: "/contact",
          label: "Contact"
        },
      }
    },
    column4: {
      title: "Quick Links",
      links: {
        home: {
          url: "/",
          label: "Home"
        },
        About: {
          url: "/about",
          label: "About"
        },
        Blog: {
          url: "/blog",
          label: "Blog"
        },
        Contact: {
          url: "/contact",
          label: "Contact"
        },
      }
    },
  }
};