import React, { Component } from 'react'
import { Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'
import Home from './containers/Home/Home'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <DefaultLayout darkMode={this.props.darkMode} exact path="/" component={Home} />
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
