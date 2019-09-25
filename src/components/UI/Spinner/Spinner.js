import React, { memo } from 'react'
import PropTypes from 'prop-types'


const spinner = props => {
  const classesName = [
    "spinner"
  ]

  if (props.size) {
    classesName.push('text-' + props.size)
  }

  return (
    <i className={"stroke-white text-black swg swg-xwing " + classesName.join(" ")}></i>
  )
}

spinner.propTypes = {
  size: PropTypes.string
}

export default memo(spinner)
