import React from 'react';

import Footer from '../components/Footer';

export default {
  title: 'Prototypes/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Columns = Template.bind({});
Columns.args = {
  footerData: {
    about: {
      logo: "",
      logoAlt: "Company Logo",
      support: "Sales & Support",
      mobile: "+1 (442) 227-3201",
      email: "support@testsigma.com",
      contactus: {
        url: "/",
        label: "Contact us"
      },
      socialIcons: {
        facebook: {
          url: "/",
          icon: "fa facebook"
        },
        twitter: {
          url: "/",
          icon: "fa twitter"
        },
        linkedin: {
          url: "/",
          icon: "fa linkedin"
        },
        youtube: {
          url: "/",
          icon: "fa youtube"
        }
      },
      trusted: {
        comapany1: {
          url: "/",
          logo: "/"
        },
        comapany2: {
          url: "/",
          logo: "/"
        },
        comapany3: {
          url: "/",
          logo: "/"
        },
        comapany4: {
          url: "/",
          logo: "/"
        },
      }
    },
    footerNav: {
      column1: {
        title: "Features",
        links: {
          link1: {
            url: "/",
            label: "Test Plan"
          },
          link2: {
            url: "/",
            label: "Test Management"
          },
          link3: {
            url: "/",
            label: "Test Data Management"
          },
          link4: {
            url: "/",
            label: "Cross Browser Testing"
          },
        },
      },
      column2: {
        title: "Guides",
        links: {
          link1: {
            url: "/",
            label: "Regression Testing"
          },
          link2: {
            url: "/",
            label: "Codeless Testing"
          },
          link3: {
            url: "/",
            label: "DevTestOps"
          },
          link4: {
            url: "/",
            label: "Data Driven Testing"
          },
          link5: {
            url: "/",
            label: "Automated Testing"
          },
          link6: {
            url: "/",
            label: "Mobile Testing"
          },
          link7: {
            url: "/",
            label: "Continuous Integration"
          },
          link8: {
            url: "/",
            label: "Cross Browser Testing"
          },
        }
      },
      column3: {
        title: "Comparison",
        links: {
          link1: {
            url: "/",
            label: "Why Testsigma?"
          },
          link2: {
            url: "/",
            label: "Selenium vs Testsigma"
          },
          link3: {
            url: "/",
            label: "Cucumber vs Testsigma"
          },
          link4: {
            url: "/",
            label: "Testsigma vs Other Tools"
          },
        },
      },
      column4: {
        title: "Quick Links",
        links: {
          link1: {
            url: "/",
            label: "Pricing"
          },
          link2: {
            url: "/",
            label: "Support"
          },
          link3: {
            url: "/",
            label: "Careers"
          },
          link4: {
            url: "/",
            label: "Documentation"
          },
          link5: {
            url: "/",
            label: "Status"
          },
          link6: {
            url: "/",
            label: "Release Notes"
          },
          link7: {
            url: "/",
            label: "Knowledge Base"
          },
          link8: {
            url: "/",
            label: "Test Automation Engineers"
          },
          link9: {
            url: "/",
            label: "Affiliate Program"
          },
        },
      },
    }
  }
};