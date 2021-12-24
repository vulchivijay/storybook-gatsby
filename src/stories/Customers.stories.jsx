import React from 'react';

import Customers from './../components/shared/customers';

export default {
  title: 'Prototypes/CustomersSection',
  component: Customers,
};

const Template = (args) => <Customers {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "1300000+ tests completed Trusted by happy customers worldwide",
  subheading: "",
  logos: {
    logo1: {
      logo: '/',
      logoAlt: 'logo1'
    },
    logo2: {
      logo: '/',
      logoAlt: 'logo2'
    },
    logo3: {
      logo: '/',
      logoAlt: 'logo3'
    }
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "",
  subheading: "Trusted by happy customers worldwide",
  logos: {
    logo1: {
      logo: '/',
      logoAlt: 'logo1'
    },
    logo2: {
      logo: '/',
      logoAlt: 'logo2'
    },
    logo3: {
      logo: '/',
      logoAlt: 'logo3'
    }
  }
};