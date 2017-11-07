// @flow

import request from 'superagent';
import { type HelloState, initialState } from '../shared/reducers/hello';

export default async function getGists() {
  const { body } = await request.get('https://api.github.com/gists');
  const helloState: HelloState = {
    ...initialState,
    loading: false,
    loaded: true,
    data: body,
  };
  return { hello: helloState };
}
