import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBolt, faPepperHot, faCog, faPalette, faLock } from '@fortawesome/free-solid-svg-icons'
library.add(faBolt, faPepperHot, faCog, faPalette, faLock)

export default props => (
  <div class={props.slug + " camp-icon"}>
    <a href={props.link}>
      <FontAwesomeIcon icon={props.icon} />
      {props.children}<em>Camp</em>
    </a>
  </div>
)
