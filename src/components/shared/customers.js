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
      {
        digits && para && (
          <div className="flex flex--jcl test--executes">
            <div className="flex w-70">
              <p className="w-60">{para}</p>
              <p className="w-40 column-digits">{digits}</p>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Customers