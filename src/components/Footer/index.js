import * as React from "react"
import Prototypes from "prop-types"
import { Link } from "gatsby"

import "./index.scss"

const Footer = ({ footerData }) => {
  return (
  <footer>
    <div className="container container--large">
      <div className="flex">
        {
          footerData.about && (<div className="flex-equal-columns fb--10">
              <p>{ footerData.about.logoAlt }</p>
              <p>{ footerData.about.support}</p>
              <p>{ footerData.about.mobile}</p>
              <p>{ footerData.about.email}</p>
            </div>)
        }
        {
          footerData.footerNav && Object.keys(footerData.footerNav).map((key, index) => {
            return (
              <div className="flex-equal-columns" key={index}>
                { footerData.footerNav[key].title && (<p><strong>{footerData.footerNav[key].title}</strong></p>) }
                {
                  footerData.footerNav[key].links && (
                    <ul>
                      {
                        Object.keys(footerData.footerNav[key].links).map((newKey, index) => (
                          <li key={index}><Link to={footerData.footerNav[key].links[newKey].url}>{footerData.footerNav[key].links[newKey].text}</Link></li>
                        ))
                      }
                    </ul>
                  )
                }
              </div>
            )
          })
        }
      </div>
      <div className="flex flex--jcc">
        <p>Copyright © Testsigma Technologies Inc. All Rights Reserved</p>
      </div>
    </div>
  </footer>)
}

Footer.propTypes = {
  data: Prototypes.shape({}),
};

Footer.defaultProps = {
  data: null
};

export default Footer



            // const column = data[key]
            // return (
            //   <div className="flex-equal-columns" key={index}>
            //       {
            //         Object.keys(column).map((key, index) => {
            //           if (typeof column[key] === 'string')
            //             return (<h4 className="title" key={index}>{column[key]}</h4>)
            //           if (typeof column[key] === 'object') {
            //             const Links = column[key]
            //             return (
            //               <ul key={index}>
            //                 {
            //                   Object.keys(Links).map((key, index) => (
            //                     <li key={index}><Link to={Links[key].url}>{Links[key].text}</Link></li>
            //                   ))
            //                 }
            //               </ul>
            //             )
            //           }
            //           return null
            //         })
            //       }
            //   </div>)
          // })