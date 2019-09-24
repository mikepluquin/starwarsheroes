import React, { memo } from 'react'
import PropTypes from 'prop-types'

import HeroIcon from './HeroIcon/HeroIcon'

const hero = props => {
  return (
    <div>
      {props.name}
      <HeroIcon heroId={props.id} />
    </div>
  )
}

hero.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired
}


export default memo(hero)