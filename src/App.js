import React, { Component } from 'react'
import { Switch, withRouter, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Header from './containers/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div id="layout" className={this.props.darkMode ? "layout-dark" : null}>
          <Header />
         
          <main className="mb-3 mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </main>

          <Footer />
        </div>
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
