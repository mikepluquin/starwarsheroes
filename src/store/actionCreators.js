import * as actionTypes from './actionTypes'

export const toggleDarkMode = () => {
  return {
    type: actionTypes.TOGGLE_DARK_MODE
  }
}

export const fetchHeroesInit = params => {
  return {
    type: actionTypes.FETCH_HEROES_INIT,
    params: params
  }
}

export const fetchHeroesSuccess = heroes => {
  return {
    type: actionTypes.FETCH_HEROES_SUCCESS,
    heroes: heroes
  }
}

export const fetchHeroesFail = () => {
  return {
    type: actionTypes.FETCH_HEROES_FAIL
  }
}

export const setParams = params => {
  return {
    type: actionTypes.UPDATE_PARAMS,
    params: params
  }
}

export const setNbResults = nbResults => {
  return{
    type: actionTypes.SET_NB_RESULTS,
    nbResults: nbResults
  }
}