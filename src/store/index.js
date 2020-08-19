import { createStore, applyMiddleware, compose } from 'redux'
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(
  reducer,
  enhancer
)

sagaMiddleware.run(todoSagas)

export default store