import * as React from "react"
import Prototypes from "prop-types"
import { Link } from "gatsby"

import "./index.scss"

const Header = ({ data }) => {
  // console.log("Header: ", data);
  return (<header>
    <div className="container container--large">
      <div className="flex">
        logo
      </div>
    </div>
  </header>)
}

Header.propTypes = {
  data: Prototypes.shape({}),
};

Header.defaultProps = {
  data: null
};

export default Header