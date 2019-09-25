import React, { memo } from 'react'
import PropTypes from 'prop-types'

import HeroIcon from './HeroIcon/HeroIcon'

const hero = props => {
  return (
    <div className="hero flex-grow-1 card border-0 m-2">
      <div className="card-header border-0">
        <span className="h3 text-yellow">
          <HeroIcon heroId={props.id} />
          &nbsp;
          {props.name}
        </span>
      </div>
      {/* <div className="card-body">
        {props.birth_year}
      </div> */}
    </div>
  )
}

hero.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number.isRequired
}

export default memo(hero)