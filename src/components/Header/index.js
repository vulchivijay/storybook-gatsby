import * as React from "react"
import Prototypes from "prop-types"
import { Link } from "gatsby"
import Button from "../shared/Button"

import "./index.scss"

const buttonWithIcon = {
  label: "Login",
  noBorder: true
}

const buttonData = {
  primary: true,
  label: "Sign up for Free"
}

const Header = ({ data }) => (
  <header>
    <div className="container container--large">
      <div className="flex flex--aic">
        <Link to="/" className="logo">{data.appTitle}</Link>
        <div className="flex flex--jcsb flex--aic fb--full">
          <nav className="primary-nav">
            <ul>
              {
                data && Object.keys(data.appNavBar).map((key, index) => {
                  return (
                    <li key={index}>
                      {data.appNavBar[key].url.length !== 0 ?
                        <Link to={data.appNavBar[key].url}>{data.appNavBar[key].label}</Link>
                        : data.appNavBar[key].label }
                        {
                          data.appNavBar[key].submenu && (
                            <ul className="submenu" key={index}>
                              {
                                Object.keys(data.appNavBar[key].submenu).map((newKey, index) => (
                                    <li key={index}>
                                      <Link to={data.appNavBar[key].submenu[newKey].url}>
                                        {data.appNavBar[key].submenu[newKey].label}
                                      </Link>
                                    </li>
                                ))
                              }
                            </ul>   
                          )
                        }
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <div>
            <Button {...buttonWithIcon} />
            <Button {...buttonData} />
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  data: Prototypes.shape({}),
};

Header.defaultProps = {
  data: null
};

export default Header