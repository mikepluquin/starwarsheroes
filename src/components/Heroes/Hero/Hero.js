import React, { memo } from 'react'
import PropTypes from 'prop-types'

import HeroIcon from './HeroIcon/HeroIcon'

const hero = props => {
  return (
    <div className="flex-grow-1 card border-0 m-2">
      <div className="card-header border-0 bg-dark">
        <h3 className="text-yellow">
          <HeroIcon heroId={props.id} />
          &nbsp;
          {props.name}
        </h3>
      </div>
      <div className="card-body">
        {props.birth_year}
      </div>
    </div>
  )
}

hero.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default memo(hero)