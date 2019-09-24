import React from 'react'

import Icon from '../../UI/Icon/Icon'

const errorLayout = (props) => {
  return (
    <div id="layout" className="layout_error">
      <main>
        <div className="h-100 d-flex align-items-center justify-content-center text-light">
          <h1>
            Oops, something went wrong !
          </h1>
        </div>
      </main>
    </div >
  )
}

export default errorLayout

