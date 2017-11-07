// @flow
import React from 'react';
import { injectGlobal } from 'styled-components';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
// flow-disable-next-line
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
// flow-disable-next-line
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

import GTWalsheimBold from '../../assets/fonts/GTWalsheim-Bold.woff';
import GTWalsheimRegular from '../../assets/fonts/GTWalsheim-Medium.woff';
import GTWalsheimLight from '../../assets/fonts/GTWalsheim-Light.woff';

import HomePage from './pages/Home';
import AboutPagePage from './pages/AboutPage';
import ContactPagePage from './pages/ContactPage';
import NotFoundPage from './pages/NotFound';
import Footer from './components/Footer';
import TopNav from './components/TopNav';

import { HOME_PAGE_ROUTE, ABOUT_PAGE_ROUTE, CONTACT_PAGE_ROUTE } from '../shared/routes';

export default function App() {
  return [
    <header key="header">
      <TopNav />
    </header>,
    <main key="main">
      <Switch>
        <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
        <Route path={ABOUT_PAGE_ROUTE} render={() => <AboutPagePage />} />
        <Route path={CONTACT_PAGE_ROUTE} render={() => <ContactPagePage />} />
        <Route component={NotFoundPage} />
      </Switch>
    </main>,
    <section key="sidebar">sidebar</section>,
    <Footer key="footer" />,
  ];
}

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'GTWalsheim Bold';
    src: url(${GTWalsheimBold});
  }

  @font-face {
    font-family: 'GTWalsheim Regular';
    src: url(${GTWalsheimRegular});
  }

  @font-face {
    font-family: 'GTWalsheim Light';
    src: url(${GTWalsheimLight});
  }

  body {
    background: red;
    font-family: 'GTWalsheim Light';
  }
`;
