import * as React from "react"
import { Link } from "gatsby"
import Button from "./Button"

import "./fullwidthstripe.scss"

const FullWidthStripe = ({para, digits, link, button, extraPara}) => {
  const buttonData = {
    primary: true,
    text: button ? button.text : ''
  }

  const bottomRightCurve = digits ? 'fullwidthstripe--brcurve' : ''

  return (
    <section className={['m-section fullwidthstripe', bottomRightCurve].join(' ')}>
      { !digits && (<div>
          { para && !digits && (<p>{para}</p>) }
          { link && (<Link to="">{link.text}</Link>) }
          { extraPara && (<p>{extraPara}</p>) }
          { button && <Button {...buttonData} /> }
        </div>)
      }
      { digits && para && (<div className="flex w-70">
          <p className="w-60">{para}</p>
          <p className="w-40 column-digits">{digits}</p>
        </div>)
      }

    </section>
  )
}

export default FullWidthStripe

