// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import HomePage from './pages/Home';
import MyReportPage from './pages/MyReport';
import MyTreatmentPage from './pages/MyTreatment';
import NotFoundPage from './pages/NotFound';

import { HOME_PAGE_ROUTE, MY_REPORT_PAGE_ROUTE, MY_TREATMENT_PAGE_ROUTE } from '../shared/routes';

export default function App() {
  return (
    <container>
      <header>header</header>
      <navbar>navbar</navbar>
      <main>
        <Switch>
          <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
          <Route path={MY_REPORT_PAGE_ROUTE} render={() => <MyReportPage />} />
          <Route path={MY_TREATMENT_PAGE_ROUTE} render={() => <MyTreatmentPage />} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <section>sidebar</section>
      <footer>footer</footer>
    </container>
  );
}
