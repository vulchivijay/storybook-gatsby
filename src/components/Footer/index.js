import * as React from "react"
import Prototypes from "prop-types"
import { Link } from "gatsby"

import "./index.scss"

const Footer = ({ data }) => (
  <footer>
    <div className="container container--large">
      <div className="flex">
        {
          data && Object.keys(data).map((key, index) => {
            return (<div className="flex-equal-columns" key={index}>
              { data[key].title && (<p><strong>{data[key].title}</strong></p>) }
              {
                data[key].links && (
                  <ul>
                    {
                      Object.keys(data[key].links).map((newKey, index) => (
                        <li key={index}><Link to={data[key].links[newKey].url}>{data[key].links[newKey].label}</Link></li>
                      ))
                    }
                  </ul>
                )
              }
            </div>)
          })
        }
      </div>
      <div className="flex flex--jcc">
        <p>Copyright © Testsigma Technologies Inc. All Rights Reserved</p>
      </div>
    </div>
  </footer>
)

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
            //                     <li key={index}><Link to={Links[key].url}>{Links[key].label}</Link></li>
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