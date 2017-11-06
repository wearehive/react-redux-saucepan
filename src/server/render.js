// @flow

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import initStore from '../shared/initStore';
import html from './html';
import App from '../shared/App';

export default function render(location: string, plainPartialState: any) {
  // TODO: check this context thing
  // This context object contains the results of the render
  const routerContext: Object = {};
  // TODO: check this or statement
  const store: Store = initStore(plainPartialState);
  const wrapApp = (
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const appHtml: string = renderToString(wrapApp);
  return html(appHtml, plainPartialState);
}
