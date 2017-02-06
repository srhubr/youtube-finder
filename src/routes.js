import React from 'react';
import { Route, IndexRoute }  from 'react-router';
import App from './components/App';
import WelcomePage from './components/WelcomePage';
import YearPage from './components/YearPage';
import LocationPage from './components/LocationPage';
import LivePage from './components/LivePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage} />
    <Route path="year" component={YearPage} />
    <Route path="location" component={LocationPage} />
    <Route path="live" component={LivePage} />
  </Route>
);
