import * as React from "react"

import "./fullWidthImage.scss"

const FullWidthImage = ({imageUrl, title, para, buttons, position}) => {
  let align = null
  if (position === 'center')
    align = 'flex--jcc'
  else if (position === 'left')
    align = 'flex--jcl'
  else
    align = 'flex--jcr'

  return (
    <div className="container">
      <div
        className={['flex flex--aic fullwidthimage', align].join(' ')}
        style={{ backgroundImage: imageUrl }}>
        <div className="width-60">
          { title && (<h1>{title}</h1>) }
          { para && (<p>{para}</p>) }
          { buttons && (
            <div className="btn-controls">
            {para}
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default FullWidthImage
