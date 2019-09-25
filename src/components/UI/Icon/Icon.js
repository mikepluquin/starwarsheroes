import React, { memo } from 'react'
import PropTypes from 'prop-types'

const icon = props => {
  const classesName = [
    "swg",
    "swg-" + props.type
  ]

  if (props.size) {
    classesName.push('text-' + props.size)
  }

  if (props.color) {
    classesName.push('text-' + props.color)
  }

  return (
    <i
      title={props.title}
      className={classesName.join(' ')}
      onClick={props.clicked}>
    </i>
  )
}

icon.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.func,
  size: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string
}

export default memo(icon)