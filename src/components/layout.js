/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
*/
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

import "./../components/common.styles.scss"
import "./../components/layout.styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const headerDate = {
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
  }

  return (
    <>
      {/* <SuperNav /> */}
      <Header {...headerDate} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
 