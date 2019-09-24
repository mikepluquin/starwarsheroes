import React, { memo } from 'react'
import PropTypes from 'prop-types'

const icon = props => {
  const classesName = [
    "swg",
    "swg-" + props.type
  ]

  return (
    <i
      className={classesName.join(' ')}
      onClick={props.clicked}>
    </i>
  )
}

icon.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.func
}

export default memo(icon)