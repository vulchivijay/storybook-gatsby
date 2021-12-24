import * as React from "react"

import "./customers.scss"

const Customers = ({title, subheading, para, logos, digits}) => {
  return (
    <section className="l-section section-customers">
      { (title || subheading) && (<div className="w-60">
          { title && (<h3>{title}</h3>) }
          { subheading && (<h4>{subheading}</h4>)}
          <div className="customers-logo flex flex--aic flex--jcc">
            {
              logos && Object.keys(logos).map((logo, index) => {
                return (
                  <span key={index}>{logos[logo].logoAlt}</span>
                )
              })
            }
          </div>
        </div>)
      }
    </section>
  )
}

export default Customers