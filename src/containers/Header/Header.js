import React, { Component } from 'react'
import { connect } from 'react-redux'

import Search from '../../components/Search/Search'
import Icon from '../../components/UI/Icon/Icon'
import * as actionCreators from '../../store/actionCreators'

class Header extends Component {
  // handleSearchTermsChange = (terms) => {
  //   this.props.onSearch(terms)
  // }

  render() {
    return (
      <header className="shadow bg-side">
        <nav className="navbar navbar-expand justify-content-around">
          <span className="navbar-brand stroke-yellow text-black lh-1">
            Star
            <br/>
            Wars
          </span>

          <ul className="navbar-nav">
            <li className="nav-item mr-2">
              <Search changed={(terms) => this.handleSearchTermsChange(terms, true)} />
            </li>
          </ul>

          <ul className="navbar-nav align-items-center">
            <li className={"nav-item stroke-white mr-2 wookie-mode-toggle text-wookie" + (!this.props.wookieMode ? " semi-transparent" : "")}>
              <Icon title="Wookie translation" size="lg" type="wookie" clicked={this.props.onToggleWookie} />
            </li>
            <li className="nav-item stroke-white dark-mode-toggle">
              <Icon title={this.props.darkMode ? "Light side" : "Dark side"} size="lg" type="lightsabers" clicked={this.props.onToggleDarkMode} />
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
    // onSearch: (terms) => dispatch(actionCreators.updateSearchTerms(terms)),
    onToggleWookie: () => dispatch(actionCreators.toggleWookieMode()),
    onToggleDarkMode: () => dispatch(actionCreators.toggleDarkMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)