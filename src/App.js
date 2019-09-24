import React, { Component } from 'react'
import { Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Layout darkMode={this.props.darkMode} exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </ErrorBoundary>
    )
  }
}
const mapStateToProps = state => {
  return {
    darkMode: state.darkMode
  }
}

export default connect(mapStateToProps)(withRouter(App))
