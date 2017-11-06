// @flow
import request from 'superagent';

export const SAY_HELLO: 'SAY_HELLO' = 'SAY_HELLO';
export const SAY_HELLO_ASYNC_REQUEST: 'SAY_HELLO_ASYNC_REQUEST' = 'SAY_HELLO_ASYNC_REQUEST';
export const SAY_HELLO_ASYNC_SUCCESS: 'SAY_HELLO_ASYNC_SUCCESS' = 'SAY_HELLO_ASYNC_SUCCESS';
export const SAY_HELLO_ASYNC_FAILURE: 'SAY_HELLO_ASYNC_FAILURE' = 'SAY_HELLO_ASYNC_FAILURE';

type payloadType = Array<Object> | ?Object;

// Typing Redux state immutability
export type HelloState = {
  +message: string,
  +messageAsync: string,
  +data: payloadType,
  +loading: boolean,
  +loaded: boolean,
};

// Using disjoint unions, Flow will be able to understand your reducers much better.
export type Action =
  | { +type: typeof SAY_HELLO }
  | { +type: typeof SAY_HELLO_ASYNC_REQUEST }
  | { +type: typeof SAY_HELLO_ASYNC_SUCCESS, payload: payloadType }
  | { +type: typeof SAY_HELLO_ASYNC_FAILURE };

export const initialState: HelloState = {
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
  loaded: false,
  loading: false,
  data: null,
};

// Reducer
export default (state: HelloState = initialState, action: Action): HelloState => {
  switch (action.type) {
    case SAY_HELLO:
      return {
        ...state,
        message: 'Hello',
      };
    case SAY_HELLO_ASYNC_REQUEST:
      return {
        ...state,
        messageAsync: 'Loading...',
        loading: true,
      };
    case SAY_HELLO_ASYNC_SUCCESS:
      return {
        ...state,
        messageAsync: 'data loaded successfully',
        loading: false,
        loaded: true,
        data: action.payload,
      };
    case SAY_HELLO_ASYNC_FAILURE:
      return {
        ...state,
        messageAsync: 'No message received, please check your connection',
        loading: false,
        loaded: false,
      };
    default:
      return state;
  }
};

type GetState = () => HelloState;
type PromiseAction = Promise<Action>;
// eslint-disable-next-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
type ThunkAction = (dispatch: Dispatch, getState?: GetState) => any;

export function fetchData(): ThunkAction {
  return async (dispatch) => {
    dispatch({ type: SAY_HELLO_ASYNC_REQUEST });

    try {
      const { body } = await request.get('https://api.github.com/gists');
      dispatch({ type: SAY_HELLO_ASYNC_SUCCESS, payload: body });
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
      dispatch({ type: SAY_HELLO_ASYNC_FAILURE });
    }
  };
}
