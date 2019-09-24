import * as actionTypes from './actionTypes'

const initialState = {
  darkMode: false
}

const toggleDarkMode = (state, action) => {
  return {
    ...state, 
    darkMode: !state.darkMode
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE: return toggleDarkMode(state, action)
    default: return state
  }
}

export default reducer
