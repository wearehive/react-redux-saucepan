// @flow

import request from 'superagent';
import { type HelloState, initialState } from '../shared/reducers/hello';

export const getHomePageData = async () => {
  const { body } = await request.get('https://api.github.com/gists');
  const helloState: HelloState = {
    ...initialState,
    loading: false,
    loaded: true,
    data: body,
  };
  return { hello: helloState };
};

// fetch data for myReportPage
export const myReportPage = () => ({
  hello: { message: 'Server-side preloaded message' },
});

// fetch data for myTreatmentPage
export const myTreatmentPage = async () => {
  const { body } = await request.get('https://api.github.com/gists');
  return {
    hello: {
      message: 'Server-side preloaded message',
      data: body,
    },
  };
};
