import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Hero from './Hero/Hero'

const heroes = props => {
  return (
    <div className="d-flex flex-wrap">
      {
        props.heroes.map(hero => (
          <Hero
            {...hero}
            key={hero.id}
            id={hero.id}
          />
        ))
      }
    </div>
  )
}

heroes.propTypes = {
  heroes: PropTypes.array.isRequired
}

export default memo(heroes)