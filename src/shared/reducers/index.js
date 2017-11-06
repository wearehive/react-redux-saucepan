// @flow
import { combineReducers } from 'redux';

import hello from './hello';

// more info on this:
// https://stackoverflow.com/questions/34106975/react-redux-router-uncaught-error-expected-the-reducer-to-be-a-function
const rootReducer = combineReducers({ hello });
export default rootReducer;
