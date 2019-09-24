import React, { memo } from 'react'
import PropTypes from 'prop-types'

const search = props => {

  return (
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        onChange={(e) => props.changed(e.target.value)} />
    </div>
  )
}

search.propTypes = {
  changed: PropTypes.func
}

export default memo(search)