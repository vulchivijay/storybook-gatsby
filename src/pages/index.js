import * as React from "react"
import Layout from "./../components/Layout"
import Customers from "../components/shared/customers"
import FullWidthString from "../components/shared/FullWidthStripe"
import FullWidthImage from "../components/shared/fullWidthImage"

// markup
const IndexPage = () => {
  const firstfold = {
    type: "onecolumn",
    imageUrl: "./assets/i21.png",
    title: "Unified, cloud-based test automation platform, powered by AI",
    para: "Testsigma uses AI to create stable and reliable automated tests faster than ever and to speed-up the executions and maintenance of your automated tests. No coding skills required.",
    points: [],
    "signin": {
      primary: true,
      url: "/",
      text: "Sign up for free"
    },
    "scheduleademo": {
      url: "/",
      text: "Schedule a demo"
    },
    position: "center"
  };

  const firstfold2 = {
    type: "twocolumn",
    imageUrl: "./assets/i21.png",
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

  const CustomersPrimary = {
    title: "1300000+ tests completed Trusted by happy customers worldwide",
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
  }

  const CustomersSecondaryWithTwoColumns = {
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
    },
  } 

  const fullWidthStringData = {
    para: "Improve test coverage with proper data sets and well-managed data-driven testing approach.",
    link: {
      url: "/",
      text: "Learn more"
    },
    extraPara: "Checkout a detailed mobile testing guide here"
  }

  const fullWidthStringData2 = {
    para: "Improve test coverage with proper data sets and well-managed data-driven testing approach.",
    button: {
      url: "/",
      text: "Start your free trail now"
    },
  }

  const fullWidthStringDataTwoColumn = {
    para: "Enables everyone including SMEs & QAs to write automated tests using simple English. No coding skills required.",
    digits: "1300000+ No of Tests Executed"
  }

  return (
    <Layout>
      <div className="container container--large">
        <h1>Index page</h1>
      </div>
      <div>
        <FullWidthImage {...firstfold} />
        <FullWidthImage {...firstfold2} />
        <Customers {...CustomersPrimary} />
        <Customers {...CustomersSecondaryWithTwoColumns} />
        <FullWidthString {...fullWidthStringData} />
        <FullWidthString {...fullWidthStringData2} />
        <FullWidthString {...fullWidthStringDataTwoColumn} />
      </div>
    </Layout>
  )
}

export default IndexPage
