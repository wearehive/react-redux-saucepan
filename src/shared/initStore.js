// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const middlewares: Array<any> = [thunkMiddleware];

// You only need state logger on client side in dev mode
// FIXME: dev webpack cant make globals
// TODO: see if you can use dynamic import

// const enhancer = compose(
//   applyMiddleware(...middlewares),
// );

export default function initStore(loadedState: any): Store {
  if (loadedState) {
    return compose(applyMiddleware(...middlewares))(createStore)(rootReducer, loadedState);
    // return createStore(rootReducer, loadedState, enhancer);
  }
  return compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
  // return createStore(rootReducer, enhancer);
}
