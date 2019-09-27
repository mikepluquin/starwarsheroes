import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Hero from './Hero/Hero'

const heroes = props => {
  return (
    <div className="d-flex flex-column">
      {
        props.heroes.map(hero => (
          <div key={hero.url} className="hero-container ml-auto mr-auto mb-2 mt-2 flex-grow-1 anim-opacity">
            <Hero
              {...hero}
            />
          </div>
        ))
      }
    </div>
  )
}

heroes.propTypes = {
  heroes: PropTypes.array.isRequired
}

export default memo(heroes)