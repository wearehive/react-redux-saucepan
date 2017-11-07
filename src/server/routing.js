// @flow

// routes
import { HOME_PAGE_ROUTE, ABOUT_PAGE_ROUTE, CONTACT_PAGE_ROUTE } from '../shared/routes';

// these functions load the data
import getGists from './controller';
import render from './render';

export default (app: express$Application) => {
  app.get(HOME_PAGE_ROUTE, async (req: express$Request, res: express$Response) => {
    res.send(render(req.url, await getGists()));
  });

  app.get(ABOUT_PAGE_ROUTE, (req: express$Request, res: express$Response) => {
    res.send(render(req.url, null));
  });

  app.get(CONTACT_PAGE_ROUTE, async (req: express$Request, res: express$Response) => {
    res.send(render(req.url, null));
  });

  app.get('/500', () => {
    throw Error('Fake Internal Server Error');
  });

  app.get('*', (req: express$Request, res: express$Response) => {
    res.status(404).send(render(req.url));
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err: ?Error, req: express$Request, res: express$Response): mixed => {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).send('Something went wrong!');
  });
};
