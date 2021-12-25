/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
*/
import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "./Footer"

import "./../components/styles.scss"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const headerData = {
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
        text: "pricing",
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
  };

  const FooterData = {
    about: {
      logo: "",
      logoAlt: "Company Logo",
      support: "Sales & Support",
      mobile: "+1 (442) 227-3201",
      email: "support@test.com",
      contactus: {
        url: "/",
        text: "Contact us"
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
            text: "Test Plan"
          },
          link2: {
            url: "/",
            text: "Test Management"
          },
          link3: {
            url: "/",
            text: "Test Data Management"
          },
          link4: {
            url: "/",
            text: "Cross Browser Testing"
          },
        },
      },
      column2: {
        title: "Guides",
        links: {
          link1: {
            url: "/",
            text: "Regression Testing"
          },
          link2: {
            url: "/",
            text: "Codeless Testing"
          },
          link3: {
            url: "/",
            text: "DevTestOps"
          },
          link4: {
            url: "/",
            text: "Data Driven Testing"
          },
          link5: {
            url: "/",
            text: "Automated Testing"
          },
          link6: {
            url: "/",
            text: "Mobile Testing"
          },
          link7: {
            url: "/",
            text: "Continuous Integration"
          },
          link8: {
            url: "/",
            text: "Cross Browser Testing"
          },
        }
      },
      column3: {
        title: "Comparison",
        links: {
          link1: {
            url: "/",
            text: "Why Testsigma?"
          },
          link2: {
            url: "/",
            text: "Selenium vs Testsigma"
          },
          link3: {
            url: "/",
            text: "Cucumber vs Testsigma"
          },
          link4: {
            url: "/",
            text: "Testsigma vs Other Tools"
          },
        },
      },
      column4: {
        title: "Quick Links",
        links: {
          link1: {
            url: "/",
            text: "Pricing"
          },
          link2: {
            url: "/",
            text: "Support"
          },
          link3: {
            url: "/",
            text: "Careers"
          },
          link4: {
            url: "/",
            text: "Documentation"
          },
          link5: {
            url: "/",
            text: "Status"
          },
          link6: {
            url: "/",
            text: "Release Notes"
          },
          link7: {
            url: "/",
            text: "Knowledge Base"
          },
          link8: {
            url: "/",
            text: "Test Automation Engineers"
          },
          link9: {
            url: "/",
            text: "Affiliate Program"
          },
        },
      },
    }
  };

  return (
    <>
      {/* <SuperNav /> */}
      <Header data={headerData} />
      <main>{children}</main>
      <Footer footerData={FooterData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
 