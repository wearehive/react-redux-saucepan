// @flow

import compression from 'compression';
import express from 'express';

import routing from './routing';
import { WEB_PORT, JS_PATH, HOST } from './../../config';

const app: express$Application = express();

app.use(compression());

app.use(JS_PATH, express.static('build'));
app.use(express.static('static'));

// compress the requeted js file
app.get('*.js', (req: express$Request, res: express$Response, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  next();
});

routing(app);

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${HOST}:${WEB_PORT} (production)`);
});
