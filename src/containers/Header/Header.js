import React, { Component } from 'react'
import { connect } from 'react-redux'

import Search from '../../components/Search/Search'
import Icon from '../../components/UI/Icon/Icon'
import * as actionCreators from '../../store/actionCreators'

class Header extends Component {
  handleSearchTermsChange = (terms) => {
    this.props.onSearch(terms)
  }

  render() {
    let modeTitle = "Light side"
    if(this.props.darkMode){
      modeTitle = "Dark side"
    }

    return (
      <header className="mb-3">
        <nav className="navbar navbar-expand">
          <span className="navbar-brand stroke-yellow text-black">
            Heroes
          </span>

          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item mr-2">
              <Search changed={(terms) => this.handleSearchTermsChange(terms, true)} />
            </li>

            <li className="nav-item mr-2 stroke-white">
              <Icon title="Wookie translation" size="md" color="wookie" type="wookie" clicked={this.props.onToggleWookie} />
            </li>
            <li className="nav-item stroke-white dark-mode-toggle">
              {modeTitle}
              &nbsp;
              <Icon title={modeTitle} size="md" type="lightsabers" clicked={this.props.onToggleDarkMode} />
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
    onSearch: (terms) => dispatch(actionCreators.updateSearchTerms()),
    onToggleWookie: () => dispatch(actionCreators.toggleWookieMode()),
    onToggleDarkMode: () => dispatch(actionCreators.toggleDarkMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)