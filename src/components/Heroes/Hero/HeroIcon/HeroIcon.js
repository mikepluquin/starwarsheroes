import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../UI/Icon/Icon'

const heroIcon = props => {
  let type = null 
  switch(props.heroId){
    case 1: type = 'lukeskywalker'; break
    case 2: type = 'r2d2-2'; break
    case 3: type = 'c3po-2'; break
    case 4: type = 'darthvader-4'; break
    case 5: type = 'leia-2'; break
    default: type = 'stormtrooper-2'
  }

  return (
    <Icon size="xl" color="side" type={type} />
  )
}

heroIcon.propTypes = {
  heroId: PropTypes.number.isRequired
}

export default memo(heroIcon)