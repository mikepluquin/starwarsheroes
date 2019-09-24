import React, { memo } from 'react'
import PropTypes from 'prop-types'

const icon = props => {
  const classesName = [
    "swg"
  ]
  
  return (
    <i className={classesName.join(' ')}></i>
  )
}

icon.propTypes = {
  heroId: PropTypes.number.isRequired
}

export default memo(icon)