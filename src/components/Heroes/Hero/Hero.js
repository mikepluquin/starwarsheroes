import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon/Icon'

const hero = props => {
  return (
    <div>
      {props.name}
      <Icon heroId={props.id} />
    </div>
  )
}

hero.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired
}


export default memo(hero)