import React, { memo } from 'react'
import PropTypes from 'prop-types'

const search = props => {

  return (
    <input
      className="form-control"
      type="search"
      placeholder="Search"
      onChange={(e) => props.changed(e.target.value)} />
  )
}

search.propTypes = {
  changed: PropTypes.func
}

export default memo(search)