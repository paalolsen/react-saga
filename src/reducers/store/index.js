import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {heroReducer} from '../../components/heroes/hero-reducer';
import {heroSaga} from '../../components/heroes/hero-saga';
import createSagaMiddelware from 'redux-saga';

const rootReducer = combineReducers({
  heroReducer
});

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddelware = createSagaMiddelware();
const middelware = [sagaMiddelware]; // Saga side effects middelware

const store = createStore(
  rootReducer,
  withDevTools(applyMiddleware(...middelware))
)

sagaMiddelware.run(heroSaga);

export default store;