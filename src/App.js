import React from 'react'
import { Switch, withRouter, Redirect } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'

const app = props => {
  return (
    <ErrorBoundary>
      <Switch>
        <Layout exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </ErrorBoundary>
  )
}

export default withRouter(app)
