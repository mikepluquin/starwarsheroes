import React, { memo } from 'react'
import PropTypes from 'prop-types'

const heroIcon = props => {
  const classesName = [
    "swg",
    "swg-" + props.type
  ]

  return (
    <i className={classesName.join(' ')}></i>
  )
}

heroIcon.propTypes = {
  heroId: PropTypes.number.isRequired
}

export default memo(heroIcon)