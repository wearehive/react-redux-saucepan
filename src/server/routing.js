// @flow

// these functions load the data
import { getHomePageData, myReportPage, myTreatmentPage } from './controller';

import { HOME_PAGE_ROUTE, MY_REPORT_PAGE_ROUTE, MY_TREATMENT_PAGE_ROUTE } from '../shared/routes';

import render from './render';

export default (app: express$Application) => {
  app.get(HOME_PAGE_ROUTE, async (req: express$Request, res: express$Response) => {
    const dataToPopulate = await getHomePageData();
    res.send(render(req.url, dataToPopulate));
  });

  app.get(MY_REPORT_PAGE_ROUTE, (req: express$Request, res: express$Response) => {
    res.send(render(req.url, myReportPage()));
  });

  app.get(MY_TREATMENT_PAGE_ROUTE, async (req: express$Request, res: express$Response) => {
    const dataToPopulate = await myTreatmentPage();
    res.send(render(req.url, dataToPopulate));
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
