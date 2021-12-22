import React from 'react';

import Footer from '../components/Footer';

export default {
  title: 'App components/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FourColumns = Template.bind({});
FourColumns.args = {
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