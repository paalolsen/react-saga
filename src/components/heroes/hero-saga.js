import {put, takeEvery, call} from 'redux-saga/effects';
import {getHeroes, getVillains} from './hero-service';
import {all} from '@redux-saga/core/effects';
import {FETCH_HERO_FAIL, FETCH_HERO_SUCCESS, FETCH_HERO_REQUEST} from './hero-actions';

/* function generator implementations of saga */
// const fecthingHeroes = ()* => {

// }

function* fetchingHeroes() {
  try{
    const {data} = yield call(getHeroes) // SAGA: Passing function
    yield put({type: FETCH_HERO_SUCCESS, payload: data});
  } 
  catch (err) {
    yield put({type: FETCH_HERO_FAIL, payload: err.message});
  }
}

function* watchFetchingHeroes() {
  yield takeEvery(FETCH_HERO_REQUEST, fetchingHeroes);
}

/* SAGA send all the watchers to the middleware to run */

export function* heroSaga() {
  yield all([
    watchFetchingHeroes(),
  ])
}