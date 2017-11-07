// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const middlewares: Array<any> = [thunkMiddleware];

export default function initStore(loadedState: any): Store {
  const composeEnhancers = __DEV__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  return createStore(rootReducer, loadedState, composeEnhancers(applyMiddleware(...middlewares)));
}
