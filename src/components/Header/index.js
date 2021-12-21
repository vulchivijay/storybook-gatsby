import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

import "./index.scss"

const Header = ({ appLogo, appTitle, appNavBar }) => (
  <header>
    <div className="container container--large">
      <div className="flex flex--spacebetween flex--items-center">
        <Link to="/" className="logo flex flex--items-center">
          {appLogo.url && (<StaticImage src="./../../images/icon.png" alt={appLogo.altText} />) }
          <span>{appTitle}</span>
        </Link>
        <nav>
          {
            Object.keys(appNavBar).map(key => (
              <Link to={appNavBar[key].url} key={key}>{appNavBar[key].label}</Link>
            ))
          }
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  appLogo: PropTypes.shape({}),
  appTitle: PropTypes.string,
  appNavBar: PropTypes.shape({}),
};

Header.defaultProps = {
  appLogo: null,
  appTitle: null,
  appNavBar: null,
};

export default Header