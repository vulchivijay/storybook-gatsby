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
        label: "Use cases",
        "submenu": {
          "link1": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link2": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link3": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link4": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
        }
      },
      "link2": {
        url: "",
        label: "Features",
        "submenu": {
          "link1": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link2": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link3": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link4": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
        }
      },
      "link3": {
        url: "/",
        label: "pricing",
      },
      "link4": {
        url: "",
        label: "Resources",
        "submenu": {
          "link1": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link2": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link3": {
            url: '/',
            label: "Web Application Testing",
            subText: "Testing web application end to end"
          },
          "link4": {
            url: '/',
            label: "Web Application Testing",
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
 