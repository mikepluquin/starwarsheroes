import * as actionTypes from './actionTypes'

const currentHour = new Date().getHours()

const initialState = {
  darkMode: currentHour <= 9 || currentHour >= 20,
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
