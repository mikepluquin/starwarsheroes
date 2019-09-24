import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'

const layout = ({ component: MatchComponent, ...remainingProps }) => {
  return (
    <div id="layout">
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

export default layout

