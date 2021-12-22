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
  };

  const FooterData = {
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
  };

  return (
    <>
      {/* <SuperNav /> */}
      <Header data={headerData} />
      <main>{children}</main>
      <Footer data={FooterData} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
 