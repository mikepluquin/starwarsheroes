import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../../../containers/Header/Header'
import Footer from '../../Footer/Footer'

const layout = ({ darkMode, component: MatchComponent, ...remainingProps }) => {
  return (
    <div id="layout" className={darkMode ? "dark-mode" : null}>
      <Header />
      <main>
        <Route
          {...remainingProps}
          render={matchProps => (
            <MatchComponent {...matchProps} />
          )}
        />
      </main>
      <Footer />
    </div>
  )
}

layout.propTypes = {
  darkMode: PropTypes.bool
}

export default layout

