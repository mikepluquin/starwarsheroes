import React, { Component } from 'react'
import { connect } from 'react-redux'

import Search from '../../components/Search/Search'
import Icon from '../../components/UI/Icon/Icon'
import * as actionCreators from '../../store/actionCreators'

class Header extends Component {
  state = {
    searchTimeout: 0
  }

  handleSearchTermsChange = (terms) => {
    const updatedParams = {
      ...this.props.params,
      search: terms,
      page: 1
    }
    
    this.props.onSetParams(updatedParams)
    clearTimeout(this.state.searchTimeout)
    this.setState({
      searchTimeout: setTimeout(() => {
        this.props.onFetchHeroes(updatedParams)
      }, 500)
    })
  }

  render() {
    return (
      <header className="shadow bg-side">
        <nav className="navbar navbar-expand justify-content-around">
          <span className="navbar-brand stroke-yellow text-black lh-1">
            Star
            <br />
            Wars
          </span>

          <ul className="navbar-nav">
            <li className="nav-item mr-2">
              <Search changed={(terms) => this.handleSearchTermsChange(terms)} />
            </li>
          </ul>

          <ul className="navbar-nav align-items-center">
            <li className="nav-item stroke-white dark-mode-toggle">
              <Icon
                title={this.props.darkMode ? "Light side" : "Dark side"}
                size="lg" type="lightsabers"
                clicked={this.props.onToggleDarkMode} />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    params: state.params,
    darkMode: state.darkMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchHeroes: (params) => dispatch(actionCreators.fetchHeroesInit(params)),
    onSetParams: (params) => dispatch(actionCreators.setParams(params)),
    onToggleDarkMode: () => dispatch(actionCreators.toggleDarkMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)