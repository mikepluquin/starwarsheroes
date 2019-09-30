import { all, put, takeLatest } from 'redux-saga/effects'

import * as authActionTypes from './actionTypes'
import * as actionCreators from './actionCreators'
import * as api from '../services/api'

export function* fetchHeroesSaga(action) {
  const response = yield api.fetchPeoples(action.params)
  if (response.ok) {
    yield put(actionCreators.fetchHeroesSuccess(response.data.results))
    yield put(actionCreators.setNbResults(response.data.count))
  }
  else{
    yield put(actionCreators.fetchHeroesFail())
  }
}

export function *watcher(){
  yield all([
    takeLatest(authActionTypes.FETCH_HEROES_INIT, fetchHeroesSaga)
  ])
}