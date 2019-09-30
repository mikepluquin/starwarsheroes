import React, { memo } from 'react'
import PropTypes from 'prop-types'

import HeroIcon from './HeroIcon/HeroIcon'

const hero = props => {
  let heroId = null
  if (props.url) {
    // hero id is the last part of its url
    // e.g. : url is "https://swapi.co/api/people/1/" , id will be 1
    const parsedUrl = props.url.split("/")
    heroId = parseInt(parsedUrl[parsedUrl.length - 2])
  }

  return (
    <div className="bg-side shadow card border-0">
      <div className="card-header border-0">
        <span className="h3 text-yellow d-flex align-items-center">
          <HeroIcon heroId={heroId} />
          &nbsp;
          {props.name}
        </span>
      </div>
    </div>
  )
}

hero.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

export default memo(hero)