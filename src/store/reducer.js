import * as actionTypes from './actionTypes'

const currentHour = new Date().getHours()

const initialState = {
  darkMode: currentHour <= 9 || currentHour >= 20,
  params: {
    search: null,
    page: 1
  },
  heroes: [],
  nbResults: null,
  error: false,
  loading: false
}

const toggleDarkMode = (state, action) => {
  return {
    ...state,
    darkMode: !state.darkMode
  }
}

const updateParams = (state, action) => {
  return {
    ...state,
    params: action.params
  }
}

const setNbResults = (state, action) => {
  return {
    ...state,
    nbResults: action.nbResults
  }
}

const fetchHeroesInit = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const fetchHeroesSuccess = (state, action) => {
  let updatedHeroes = action.heroes
  if (state.params.page > 1) {
    updatedHeroes = state.heroes.concat(action.heroes)
  }
  return {
    ...state,
    heroes: updatedHeroes,
    error: false,
    loading: false
  }
}

const fetchHeroesFail = (state, action) => {
  return {
    ...state,
    heroes: [],
    error: true,
    loading: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE: return toggleDarkMode(state, action)
    case actionTypes.FETCH_HEROES_INIT: return fetchHeroesInit(state, action)
    case actionTypes.FETCH_HEROES_SUCCESS: return fetchHeroesSuccess(state, action)
    case actionTypes.FETCH_HEROES_FAIL: return fetchHeroesFail(state, action)
    case actionTypes.UPDATE_PARAMS: return updateParams(state, action)
    case actionTypes.SET_NB_RESULTS: return setNbResults(state, action)
    default: return state
  }
}

export default reducer
