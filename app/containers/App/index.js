/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import JunkPage from 'containers/JunkPage/Loadable';
import { HeaderMenus, FooterMenus } from 'routes';
import { AppWrapper, MainWrapper } from './stylecomponent';
import { Header, Footer } from './component';

import GlobalTheme from '../../global-css-theme';
import GlobalStyle from '../../global-styles';
import '../../font_icon.css';
import '../../font_vazir.css';
import '../../react-id-swiper.css';

import { MenuContext } from './context';

export default function App() {
  return (
    <MenuContext.Provider value={{ HeaderMenus, FooterMenus }}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header />

        <MainWrapper>
          <Switch>
            <Route exact path="/" component={JunkPage} />
            <Route path="/junk" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainWrapper>

        <Footer />
        <GlobalTheme />
        <GlobalStyle />
      </AppWrapper>
    </MenuContext.Provider>
  );
}
