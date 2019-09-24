import * as actionTypes from './actionTypes'

const initialState = {
  darkMode: false,
  wookieMode: false
}

const toggleDarkMode = (state, action) => {
  return {
    ...state, 
    darkMode: !state.darkMode
  }
}

const toggleWookieMode = (state, action) => {
  return {
    ...state, 
    wookieMode: !state.wookieMode
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE: return toggleDarkMode(state, action)
    case actionTypes.TOGGLE_WOOKIE_MODE: return toggleWookieMode(state, action)
    default: return state
  }
}

export default reducer
