import React, { memo } from 'react'
import PropTypes from 'prop-types'

const button = props => {
  const classesName = [
    "btn"
  ]

  if (props.size) {
    classesName.push('btn-' + props.size)
  }
  if (props.color) {
    classesName.push('btn-' + props.color)
  }

  classesName.push(...props.classesName)
  
  return (
    <button
      className={classesName.join(' ')}
      type={props.type}
      disabled={props.disabled}
      onClick={props.clicked}>
      {props.children}
    </button >
  )
}

button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  clicked: PropTypes.func,
  classesName: PropTypes.array
}

button.defaultProps = {
  color: "primary"
};

export default memo(button)