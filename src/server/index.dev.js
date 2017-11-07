// @flow
import express from 'express';

/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/* eslint-enable import/no-extraneous-dependencies */

import webpackConfig from '../../scripts/webpack.dev';
import html from './html';
import { WEB_PORT, HOST } from './../../config';

const app: express$Application = express();
app.use(express.static('static'));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  heartbeat: 2000,
  quiet: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': `http://${HOST}:${WEB_PORT}`,
  },
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', (req: express$Request, res: express$Response) => {
  res.send(html());
});

// flow-disable-next-line
app.listen(WEB_PORT, HOST, (err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
    return;
  }
  // FIXME: env variable check should be changed
  // eslint-disable-next-line no-console
  console.log(`Server running at ${HOST}:${WEB_PORT} (Auto Refresh)`);
});
