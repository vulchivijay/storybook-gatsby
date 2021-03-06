import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "./Button"

import "./fullWidthImage.scss"

const FullWidthImage = ({type, imageUrl, title, para, points, signin, scheduleademo, position}) => {
  let align = null
  if (position === 'center')
    align = 'flex--jcc'
  else if (position === 'left')
    align = 'flex--jcl'
  else
    align = 'flex--jcr'

  return (
    <div className="container">
      {
        type === "onecolumn" && (<div className={['flex flex--aic one-column', align].join(' ')}>
          <div className="">
            { title && (<h1>{title}</h1>) }
            { para && (<p>{para}</p>) }
            <div className="btn-controls">
              { signin && (<Button {...signin}/>) }
              { scheduleademo && (<Button {...scheduleademo}/>) }
            </div>
          </div>
        </div>)
      }
      {
        type === "twocolumn" && (
          <div className="container container--medium">
            <div className={['flex flex--aic two-columns', align].join(' ')} style={{ backgroundImage: imageUrl }}>
              <div className="content">
                { title && (<h1>{title}</h1>) }
                { points && (
                  <ul>
                    { points.map((point, index) => {
                      return (<li key={index}><i>icon</i> {point} </li>)
                    })
                    }
                  </ul>
                )}
                <div className="btn-controls">
                  { signin && (<Button {...signin}/>) }
                  { scheduleademo && (<Button {...scheduleademo}/>) }
                </div>
              </div>
              <div className="feature-image">
                <StaticImage
                  src={"./../../stories/assets/i21.png"}
                  alt={title}
                />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default FullWidthImage
