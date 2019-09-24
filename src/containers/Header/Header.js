import React, { Component } from 'react'
import { connect } from 'react-redux'

import Icon from '../../components/UI/Icon/Icon'
import * as actionCreators from '../../store/actionCreators'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand">
          <span className="navbar-brand">
            Heroes
          </span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Icon type="wookie" clicked={this.props.onToggleWookie} />
            </li>
            <li className="nav-item">
              <Icon type="lightsabers" clicked={this.props.onToggleDarkMode} />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    wookieMode: state.wookieMode,
    darkMode: state.darkMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleWookie: () => dispatch(actionCreators.toggleWookieMode()),
    onToggleDarkMode: () => dispatch(actionCreators.toggleDarkMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)