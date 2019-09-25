import * as actionTypes from './actionTypes'

export const toggleDarkMode = () => {
  return {
    type: actionTypes.TOGGLE_DARK_MODE
  }
}

export const toggleWookieMode = () => {
  return {
    type: actionTypes.TOGGLE_WOOKIE_MODE
  }
}

export const updateSearchTerms = () => {
  return {
    type: actionTypes.UPDATE_SEARCH_TERMS
  }
}