import React from 'react'
import { Switch, withRouter, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'

const app = props => {
  return (
    <Switch>
      <Layout exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  )
}

export default withRouter(app)
