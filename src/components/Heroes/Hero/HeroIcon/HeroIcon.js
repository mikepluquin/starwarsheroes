import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../UI/Icon/Icon'

const heroIcon = props => {
  let type = null 
  switch(props.heroId){
    case 1: type = 'lukeskywalker'; break
    case 2: type = 'c3po-2'; break
    case 3: type = 'r2d2-2'; break
    case 4: type = 'darthvader-4'; break
    case 5: type = 'leia-2'; break
    case 10: type = 'obiwankenobi'; break
    case 11: type = 'anakin'; break
    case 13: type = 'chewbacca'; break
    case 14: type = 'hansolo'; break
    case 16: type = 'jabba'; break
    case 20: type = 'yoda-3'; break
    case 21: type = 'emperor'; break
    case 22: type = 'bobafett'; break
    case 32: type = 'quigonjinn'; break
    case 35: type = 'padme'; break
    case 44: type = 'darthmaul'; break
    case 51: type = 'macewindu'; break
    case 67: type = 'dooku'; break
    case 87: type = 'bb8-3'; break
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