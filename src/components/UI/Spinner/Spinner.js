import React, { memo } from 'react'
import PropTypes from 'prop-types'


const spinner = props => {
  const classesName = [
    "spinner"
  ]

  if (props.size) {
    classesName.push('text-' + props.size)
  }
  if (props.color) {
    classesName.push('text-' + props.color)
  }

  return (
    <i className={"swg swg-xwing" + classesName.join(" ")}></i>
  )
}

spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

export default memo(spinner)
