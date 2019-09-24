import React, { Component } from 'react'
import { connect } from 'react-redux'

import Icon from '../../components/UI/Icon/Icon'
import * as actionCreators from '../../store/actionCreators'

class Header extends Component{
  render(){
    return(
      <header>
        <Icon type="wookie" clicked={this.props.onToggleWookie}/>
        <Icon type="lightsabers" clicked={this.props.onToggleDarkMode}/>
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